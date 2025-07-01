// src/api/iceClient.js
import axios from 'axios';

const URL_DIRECT = 'https://global-warming.org/api/arctic-api';
const URL_PROXY  = '/gw/arctic';                     

const yyyyMmToDecimal = ym => {
  const y = Number(ym.slice(0, 4));
  const m = Number(ym.slice(4));
  return (y + (m - 0.5) / 12).toFixed(4);            // 197901 → 1979.0417
};

export const getIceData = async () => {
  try {
    const { data } = await axios.get(
      import.meta.env.DEV ? URL_PROXY : URL_DIRECT,
      { timeout: 15_000 }
    );

    let records = [];

    
    if (data?.arcticData?.data && typeof data.arcticData.data === 'object') {
      records = Object.entries(data.arcticData.data)
        .map(([ym, o]) => ({
          year:   yyyyMmToDecimal(ym),
          extent: String(o?.value ?? ''),           
          area:   String(o?.monthlyMean ?? ''),     
        }))
        .filter(r => r.extent);                      
    }


    if (!records.length) {
      const raw =
        data?.seaIce ??
        data?.arcticData ??
        data?.result ??
        Object.values(data).find(v =>
          Array.isArray(v) ||
          (v && typeof v === 'object' && v['0'] && v['0'].year)
        );

      if (raw) {
        records = (Array.isArray(raw) ? raw : Object.values(raw))
          .filter(r => r?.year)
          .map(r => ({
            year:   String(r.year),
            extent: String(r.extent ?? r.value ?? ''),
            area:   String(r.area   ?? ''),
          }));
      }
    }

    
    records.sort((a, b) => Number(a.year) - Number(b.year));

    if (import.meta.env.DEV) {
      console.debug('[iceClient] response schema:', data);
      console.log(
        '[iceClient] Totale record:', records.length,
        '| Primo:',  records[0],
        '| Ultimo:', records[records.length - 1]
      );
    }

    return records;
  } catch (err) {
    console.error('[iceClient] Errore fetch Arctic API:', err);
    return [];
  }
};

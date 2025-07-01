export const getTemperatureData = async () => {
  const res = await fetch('https://global-warming.org/api/temperature-api');
  if (!res.ok) throw new Error('Errore nel recupero dei dati temperatura');
  
  const json = await res.json();
  return json.result; 
};

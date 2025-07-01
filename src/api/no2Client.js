// no2Client.js

import _ from 'lodash';

export const getNO2Data = async () => {
  try {
    const response = await fetch('https://global-warming.org/api/nitrous-oxide-api');
    const json = await response.json();
    const rawData = _.get(json, 'nitrous', []);
    return _.cloneDeep(rawData);
  } catch (error) {
    console.error('Failed to fetch NO2 data:', error);
    return [];
  }
};

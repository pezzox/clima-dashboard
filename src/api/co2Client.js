// co2Client.js

import _ from 'lodash';

// This function fetches CO2 data from the public API
export const getCO2Data = async () => {
  try {
    const response = await fetch('https://global-warming.org/api/co2-api');
    const json = await response.json();

    // Use lodash to safely access and clone the CO2 data array
    const rawData = _.get(json, 'co2', []);
    return _.cloneDeep(rawData);

  } catch (error) {
    console.error('Failed to fetch CO2 data:', error);
    return [];
  }
};
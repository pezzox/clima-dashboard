// methaneClient.js

import _ from 'lodash';

// Fetches methane data from the global-warming.org API
export const getMethaneData = async () => {
  try {
    const response = await fetch('https://global-warming.org/api/methane-api');
    const json = await response.json();
    const rawData = _.get(json, 'methane', []);
    return _.cloneDeep(rawData);
  } catch (error) {
    console.error('Failed to fetch methane data:', error);
    return [];
  }
};
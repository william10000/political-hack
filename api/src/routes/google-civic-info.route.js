// https://developers.google.com/civic-information/docs/using_api
// https://developers.google.com/civic-information/docs/v2/representatives/representativeInfoByAddress
// https://github.com/googleapis/google-api-nodejs-client
const { google } = require('googleapis');

function apiKey() {
  return new Promise((resolve, reject) => {
    if (process.env.GOOGLE_CIVIC_API_KEY) {
      resolve(process.env.GOOGLE_CIVIC_API_KEY);
    } else {
      reject(new Error('Failed to fetch data from google civic.'));
      return;
    }
  });
}

async function getRepsFromCivicInfoAPI(address) {
  let key;
  try {
    key = await apiKey();
  } catch (e) {
    console.error(e);
    return;
  }

  const civicInfo = google.civicinfo({
    version: 'v2',
    auth: key,
  });

  const results = await civicInfo.representatives.representativeInfoByAddress({
    address: address,
  });
  
  return results.data
}

async function repsForAddress(req, res) {
  const address = req.params.address;
  const results = await getRepsFromCivicInfoAPI(address);
  res.status(200).json(results);
}

module.exports = {
  repsForAddress,
  getRepsFromCivicInfoAPI,
};
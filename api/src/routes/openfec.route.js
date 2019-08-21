// https://api.open.fec.gov/developers/
const fetch = require('node-fetch');

function apiKey() {
  return new Promise((resolve, reject) => {
    if (process.env.OPENFEC_API_KEY) {
      resolve(process.env.OPENFEC_API_KEY);
    } else {
      reject(Error('Failed to fetch data from openfec api.'));
    }
  });
}

async function getCandidatesFromOpenFECAPI(name) {
  let key;

  try {
    key = await apiKey();
  } catch (e) {
    console.error(e);
    return;
  }

  const url = `https://api.open.fec.gov/v1/candidates/search?api_key=${key}&name=${name}`;
  const response = await fetch(url);
  const results = response.json();

  return results;
}

async function candidatesForName(req, res) {
  const name = req.params.name;
  results = await getCandidatesFromOpenFECAPI(name);
  res.status(200).json(results);
}

module.exports = {
  candidatesForName,
  getCandidatesFromOpenFECAPI,
};
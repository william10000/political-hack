import "babel-polyfill";
import { getCandidatesFromOpenFECAPI } from './openfec.route';
require('../config/env'); // server.js isn't loaded so we need to 'require' the env variables here

test('API returns reasonable data', async () => {
  const results = await getCandidatesFromOpenFECAPI('David Perdue');
  const resultsString = JSON.stringify(results);
  console.log(resultsString);
  expect(resultsString).toMatch('REPUBLICAN PARTY');
});

import "babel-polyfill";
import { getRepsFromCivicInfoAPI } from './google-civic-info.route';
require('../config/env'); // server.js isn't loaded so we need to 'require' the env variables here

test('API returns someone living at the white house when given a legit US address', async () => {
  const results = await getRepsFromCivicInfoAPI('3423 Piedmont Rd NE, Atlanta, GA 30305');
  const resultsString = JSON.stringify(results);
  console.log(resultsString);
  expect(resultsString).toMatch('The White House');
});

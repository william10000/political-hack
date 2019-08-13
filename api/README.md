# WIP: political-hack api/client

## Getting Started

Get some API keys for Google Civic and OpenFEC APIs and create a .env file in the api directory to store the keys. The .env file should be ignored because of an entry in .gitignore. For google, you might want to set up a billing or other alerts monitor usage of your key. You might also want to restrict the google key to just the Civic API.

## The application locally

Run `npm i` in the app and api directories. Use screen/tmux or another multiplexer if you want to watch the console output of both.

Run `npm start` in the app and api directories to start the server and the client.

Run `npm test` to run rudimentary sanity checks to make sure we're correctly retrieving data from the APIs

## Contribution

Please fork the repository, and only commit the relevant files to your changes in a pull request. A descriptive commit message speeds up the process!

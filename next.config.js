require('dotenv').config();

module.exports = {
  target: 'serverless',
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
};

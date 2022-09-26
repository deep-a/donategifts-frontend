const path = require('node:path');
const { i18n } = require('./next-i18next.config');

function getAPIHost() {
  const env = process.env.NODE_ENV;

  if (env === 'development') {
    return 'http://localhost:3001/';
  }

  if (env === 'testing') {
    return 'https://ts-backend-dev-vbamtom7tq-uc.a.run.app/';
  }

  return 'https://donate-gifts.com/website-api';
}

module.exports = {
  env: {
    APP_API_KEY: process.env.APP_API_KEY,
    API_ENDPOINT: getAPIHost()
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  i18n,
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  }
};

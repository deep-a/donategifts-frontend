/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { i18n } = require('./next-i18next.config');

function getAPIHost() {
  const env = process.env.NODE_ENV;

  if (env === 'development') {
    return 'http://localhost:3010/website-api';
  }

  if (env === 'testing') {
    return 'https://dev.donate-gifts.com/website-api';
  }

  return 'https://donate-gifts.com/website-api';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = {
  env: {
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

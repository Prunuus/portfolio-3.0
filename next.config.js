// next.config.js
const path = require('path');

module.exports = {
  webpack(config) {
    // Set up an alias to the 'styles' directory
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles');
    return config;
  },
};

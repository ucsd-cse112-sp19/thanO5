const path = require('path');
const custom = require('../config/webpack.dev');

module.exports = async ({ config, mode }) => {
  return { ...config, module: { ...config.module, rules: custom.module.rules } };
};
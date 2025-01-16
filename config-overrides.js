const path = require('path');

module.exports = function override(config, env) {
  config.module.rules.forEach(rule => {
    if (rule.oneOf) {
      rule.oneOf.forEach(subRule => {
        if (subRule.test && subRule.test.toString().includes('scss')) {
          const sassLoader = subRule.use.find(loader => loader.loader && loader.loader.includes('sass-loader'));
          if (sassLoader) {
            sassLoader.loader = require.resolve('sass-loader');
            sassLoader.options = {
              ...sassLoader.options,
              implementation: require('sass'),
            };
          }
        }
      });
    }
  });

  return config;
};

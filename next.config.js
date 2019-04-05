const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');


module.exports = withSASS(withCSS({
  sassLoaderOptions: {
    includePaths: ['node_modules'],
  },
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };
    return config;
  },
}));

const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');

const useExperimentalFeatures = false;
const useBreakingChanges = false;
const useExternalCss = true;
const useStyleSourceMap = true;


module.exports = withSASS(withCSS({
  sassLoaderOptions: {
    includePaths: ['node_modules'],
    data: `
        $feature-flags: (
          components-x: ${useExperimentalFeatures},
          breaking-changes-x: ${useBreakingChanges},
          ui-shell: false,
        );
      `,
    sourceMap: useStyleSourceMap,
  },
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };
    return config;
  },
}));

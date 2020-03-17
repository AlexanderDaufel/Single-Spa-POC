const webpackMerge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'company',
    projectName: 'react-pinterest',
    webpackConfigEnv,
  })

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  })
}
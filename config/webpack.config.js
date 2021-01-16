const path = require('path');

module.exports = {
    mode: 'development',
    entry: './htdocs/src/js/Index.js',
    stats: {
        assets: false,
        builtAt: false,
        moduleAssets: false,
        cached: false,
    },
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../htdocs/build/assets/js'),
     },
};
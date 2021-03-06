const path = require('path');
const MiniCSSExtract = require('mini-css-extract-plugin');
module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new MiniCSSExtract({
    filename: 'styles.css'
  });

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'), // folder to serve
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, {
          test: /\.s?css$/,
          use: [
            MiniCSSExtract.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: !isProduction
              }
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProduction
              }
            }
          ]
        }
      ]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    },
    mode: 'development'
  };
};
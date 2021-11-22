const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const modules = path.resolve("node_modules");

module.exports = {
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  devtool: "cheap-source-map",
  output: {
    publicPath: "/",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(jpe?g|svg|png|gif|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      "lodash-es": "lodash",
      "lodash.debounce": "lodash/debounce",
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      favicon: "./src/images/favicon.ico",
    }),
  ],
};

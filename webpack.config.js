const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const indextInput = "./src/index.html";
const indexOutput = "index.html";

const basePath = __dirname;
const distPath = "dist";
module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js"],
  },
  entry: {
    app: ["./src/main.js"],
  },
  output: {
    path: path.join(basePath, distPath),
    filename: "[chunkhash][name].js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      filename: indexOutput,
      template: indextInput,
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  devtool: 'eval-source-map',
};

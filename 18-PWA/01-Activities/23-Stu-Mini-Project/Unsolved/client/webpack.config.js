
const config = {
  // Add webpack configuration code here

  entry: {
    index: "./assets/js/index.js",
    favorites: "./assets/js/config/favorites.js",
    topic: "./assets/js/config/topic.js",

  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};

module.exports = config;

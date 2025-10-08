module.exports = {
  module: {
    rules: [
      {
        // babel을 트랜스파일링 시킬 대 mjs|js 파일을 모두 포함
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // jsx transpile, es6|7 => es5
            presets: ["@babel/preset-react", "@babel/preset-env"],
            // ex) async await 최신 문법 변환
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};

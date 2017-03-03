module.exports = {
  entry: [
    './app.js'
  ],
  output: {
    // path: '/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader','babel-loader']
			},
			{
				test: /\.css$/,
				loaders: ['style-loader','css-loader']
			}
    ]
  },
};
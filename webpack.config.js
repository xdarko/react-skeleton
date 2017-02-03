var webpack = require("webpack");

module.exports = {
	entry: "./src/main.jsx",
	output: {
		path: "dist/assets",
		filename: "bundle.js",
		publicPath: "assets"
	},
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3000
	},
	// module: {
	// 	loaders: [
	// 		{
	// 			test: /\.js$/,
	// 			exclude: /(node_modules)/,
	// 			loader: ["babel-loader"],
	// 			query: {
	// 				presets: ["latest", "stage-0", "react"]
	// 			}
	// 		}
	// 	]
	// }
	module: {
		rules: [{
			test: /\.jsx$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
				options: {
					babelrc: false,
					presets: [
					'latest',
					'stage-0',
					'react'
					]
				}
			}]
		}] 
	}
}
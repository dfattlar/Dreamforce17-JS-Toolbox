module.exports = {
	entry: "./app.js",
	output: {
		filename: "bundle.js"
	},
	watch: true,
	module: {
	  rules: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['env']
	        }
	      }
	    }
	  ]
	}
};
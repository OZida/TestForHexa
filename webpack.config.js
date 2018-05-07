const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	mode: 'none',
	entry: {
		main: path.resolve(__dirname,'src','index.js'),
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname,'build')
	},
	watch: true,
	module: {
		rules: [
		{
			test: /\.css$/,
			use: [
				{
					loader: 'css-loader'
				}
			]
		},
		{
			test: /\.scss$/,
			use: [
				{loader: 'style-loader'},
				{loader: 'css-loader'},
				{loader: 'sass-loader'}
			]
		},
		{
			test: /\.vue$/, 
			use: [
				{
					loader: 'vue-loader'
				}
			]
		},
		{
			test: /\.(png|jpg|gif|svg)$/,
            use: [
                {
                    loader: "url-loader",
                    options: {
                        limit: 8000, 
                    }
                }
            ]
        },
        {
	        test: /\.(png|jpg|gif|svg)$/,
	        loader: 'file-loader',
	        options: {
	        	name: '[name].[ext]?[hash]'
	        }
	    },
	    {
	        test: /\.(woff|woff2|eot|ttf|otf)$/,
	        loader: "file-loader",
        },
        ]
    },    
    devServer: {
		contentBase: path.join(__dirname,"build"),
		compress: true,
		disableHostCheck: true,
		port: 8080,
		open: true,
		hot: true,
		stats: {
			children: false,
	        chunks: false,
	        colors: true,
	        depth: false,
	        entrypoints: false,
	        errors: true,
	        errorDetails: true,
	        hash: true,
	        modules: false,
	        maxModules: 15,
	        modulesSort: "field",
	        performance: true,
	        timings: true,
	        version: true,
	        warnings: true
		}
	},
    plugins: [
    	new webpack.HotModuleReplacementPlugin(),
    	new VueLoaderPlugin(),
		new HtmlWebpackPlugin({template:'./static/index.html'}),
	]
}
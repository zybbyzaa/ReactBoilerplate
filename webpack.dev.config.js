var config = require("./app-config.js");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    watch: true,
    entry: {
    	fundDetail: './src/fund-detail/entry.js',
    	vendor: ['react', 'react-dom', 'redux', 'react-router', 'react-redux', 'react-router-redux']
    },
    output: {
        filename: 'js/[name].js'
    },
    module: {
      	loaders: [{
	      	test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            } 
      	}, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style","css!sass")
        }, {
        	test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        }, {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            loader: 'url-loader',
            query: {
              name: 'images/[hash].[ext]',
              limit: 10000,
            }
        }, {
            test: /\.(woff|woff2)$/,
            loader: 'url-loader',
            query: {
              name: 'fonts/[hash].[ext]',
              limit: 10000,
            }
        }, {
            test: /\.(eot|ttf)$/,
            loader: 'file-loader',
            query: {
              name: 'fonts/[hash].[ext]',
            }
        }]
    },
    plugins: [
        new CleanWebpackPlugin("dest", {
            root: process.cwd(),
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
        	title: 'react',
        	filename: 'fundDetail.html',
        	inject: true,
            chunks: ['vendor','fundDetail'],
            template: config.path.template,
            favicon: config.path.favicon
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.bundle.js'),
        new ExtractTextPlugin("css/[name]-[chunkhash].css", {
            allChunks: true
        })
    ]
};
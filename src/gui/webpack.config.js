var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//const ElectronPackager = require("webpack-electron-packager");

module.exports = {
    //devtool: 'source-map',
    entry: [
        './app/app'
    ],
    plugins: [
        new webpack.ExternalsPlugin('commonjs', [
            'electron'
        ]),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
      contentBase: './',
      publicPath: 'http://localhost:8080/'
    },
    /*
    plugins: [
        new ElectronPackager({
          dir: "./",
          arch: "x64",
          platform: "win32",
        })
    ],*/
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/,
                include: __dirname
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }, {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            }, {
                test: /\.jpg$/,
                loader: "file-loader"
            }, {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    },
    "scripts": {
      "watch": "./node_modules/.bin/webpack-dev-server",
      "electron-rebuild": "./node_modules/.bin/electron-rebuild"
    }
};

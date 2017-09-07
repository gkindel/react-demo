const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ["transform-object-rest-spread"]
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })

    }
        ],
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ],
    devtool: "eval",
    devServer: {
        watchContentBase: true,
        contentBase: path.join(__dirname, "static"),
        compress: true,
        port: 9000
    }
};
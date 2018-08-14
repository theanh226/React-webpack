const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// you can add more some dependenci here 
const VENDOR_LIBS = [
    'bootstrap', 'jquery', 'react', 'react-dom', 'react-redux', 'react-router-dom', 'redux', 'redux-thunk'
]

//change port
const devServer = {
    port: 4002,
    open: true,
    disableHostCheck: true,
    historyApiFallback: true,
    overlay: true,
    stats: 'minimal',
    inline: true,
    compress: true,
    contentBase: '/'
}





const config = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js' //create foder name 'build' ,inner folder have file name bundle.js with hash code
    },
    module: {
        rules: [{
                loaders: 'babel-loader',
                test: /\.js$/,
                exclude: '/node_modules/'
            },
            {
                use: ['style-loader', 'css-loader','sass-loader'],
                test: /\.css$/
            }, {
                loader: 'file-loader',
                test: /\.jpe?g$|\.gif$|\.svg$|\.woff$|\.eot$|\.woff2$|\.ttf$|\.wav$|\.mp3$|\.ico$/
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                    priority: 1
                }
            }
        }
    },
    devServer,
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}

module.exports = config;
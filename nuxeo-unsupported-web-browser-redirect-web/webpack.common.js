const path = require('path');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

dotenv.config();

module.exports = {
    target: ['web', 'es5'],
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: {
                                filter: (url, resourcePath) => {
                                    // resourcePath - path to css file
                                    // Don't handle images under root /nuxeo/
                                    return !url.startsWith('/nuxeo/');
                                },
                            }
                        }
                    }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title : 'Index',
            hash : true,
            filename : 'index.html',
            template: './src/index.html',
            inject:'head'
        }),
        new CopyWebpackPlugin({
            patterns: [
            /*{
                from: './src/css',
                to: 'css'
            },*/
            {
                from: './src/images',
                to: 'images'
            }
        ]})
    ]
};


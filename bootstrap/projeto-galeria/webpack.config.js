const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const terserwebpackplugin = require('terser-webpack-plugin')
//const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const cssminimizerwebpackplugin = require('css-minimizer-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { TRUE } = require('node-sass')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        filename: 'app.js',
        path: __dirname + '/build'
    },
    devServer: {
        static: {
            directory: "./build"
        },
        compress: true,
        port: 8080,
    },
    optimization: {
        minimize: true,
        minimizer: [new terserwebpackplugin(),
                   new cssminimizerwebpackplugin ({})]
    },
    
    plugins: [
        new MiniCssExtractPlugin({ filename: 'estilo.css' }),
        new CopyWebpackPlugin({
            patterns: [
                { from: '**/*.html', context: 'src/' },
                { from: 'imgs/**/*', context: 'src/' },
            ],
            }),
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }, {
            test: /.(ttf|otf|eot|svg|woff(2)?)$/,
            use: ['file-loader']
        }]
    }
}
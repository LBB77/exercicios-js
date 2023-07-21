const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const css_minimizer_webpack_plugin = require('css-minimizer-webpack-plugin')
const terser_webpack_plugin = require('terser-webpack-plugin')
const { TRUE } = require('node-sass')


module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        static: {
            directory: "./public"
        },
        compress: true,
        port:8080
    },
    optimization: {
        minimize: true,
        minimizer: [
            new css_minimizer_webpack_plugin({})
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css",
        }),
        new terser_webpack_plugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
        
    ],
    module: {
        rules: [{
            test:/\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', //Adiciona CSS a DOM injetando a tag <style>
                'css-loader', //@import, url()...
                'sass-loader',
                
            ]
        }, {
            test: /\.(png|svg|jpg|gif|jpeg)$/,
            //use: ['file-loader']
        }]
    }
}
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            favicon: path.join(__dirname, 'public', 'favicon.ico'),
            filename: 'index.html',
            inject: true,
        }),
        new CopyPlugin({
            patterns: [{ from: 'public/img', to: 'img' }],
        }),
    ],
    resolve: {
        modules: [__dirname, 'src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        port: 9000,
        historyApiFallback: true,
        compress: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /node_modules/,
                use: ['file-loader'],
            },
        ],
    },
};

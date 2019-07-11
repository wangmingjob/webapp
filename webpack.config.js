const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // 解析
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.css', '.wasm'], //后缀名自动补全
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    // loader
    module: {
        rules: [
            {
                // .js .jsx用babel解析
                test: /\.js?$/,
                use: ['happypack/loader'],
                include: path.resolve(__dirname, 'src'),
            },
            {
                // .css 解析
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                // .less 解析
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', {
                    loader: 'less-loader',
                    options: {javascriptEnabled: true}
                }],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'List',
            // Load a custom template (lodash by default see the FAQ for details)
            template: 'index.html'
        }),
        new HappyPack({
            loaders: ['babel-loader'],
        }),
    ]
};

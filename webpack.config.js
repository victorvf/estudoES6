module.exports = {
    entry: './main-webpack.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle-webpack.js',
    },
    devServer: {
        contentBase: __dirname + '/public',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
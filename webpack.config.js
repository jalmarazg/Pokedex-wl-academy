const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node-modules/
            },
            {
              test: /\.(eot|woff|ttf|svg|png|jpg)$/,
              loader: "file-loader"
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, '/public'),
        historyApiFallback: true
    }
}
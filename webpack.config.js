var path = require('path');
var webpack = require('webpack')

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/bundle.js')
    ],

    output: {
        path: path.resolve(__dirname, 'release'),
        filename: 'memory.min.js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel']
        }]
    },

    plugins:[
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: false
            }
        })
    ]
};
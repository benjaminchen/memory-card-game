var path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/bundle.js')
    ],

    output: {
        path: path.resolve(__dirname, 'example/assets/js'),
        filename: 'memory.min.js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel']
        }]
    }
};
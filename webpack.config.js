module.exports = {
    entry: './module/main.js',
    output: {
        filename: './module/bundle/main.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            }
        ]
    }
};
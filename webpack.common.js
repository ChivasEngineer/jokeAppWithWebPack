module.exports = {
    entry: './src/index.js',
    output: {
        assetModuleFilename: 'images/[hash:4][ext]'
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource'
            },
        ],
    },
}
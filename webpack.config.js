var path = require('path')
var webpack = require('webpack')
var NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/index',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new NpmInstallPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                enforce: 'pre',
                loader: 'eslint-loader'
            },
            {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: [
                {
                    loader: 'react-hot-loader/webpack',
                    options: {
                        plugins: [
                            `transform-runtime`
                        ]
                    }
                },
                {
                    loader: `babel-loader`,
                    options: {
                        plugins: [
                            `transform-runtime`
                        ]
                    }
                }
            ]
        }]
    }
}

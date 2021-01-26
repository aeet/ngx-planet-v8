/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2021-01-22 10:35:06
 * @LastEditTime: 2021-01-22 11:05:23
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /ngx-planet-v8-parent/example/app1/extra-webpack.config.js
 * @LICENSE: Apache-2.0
 */
const WebpackAssetsManifest = require('webpack-assets-manifest');
const PrefixWrap = require('@worktile/planet-postcss-prefixwrap');

module.exports = {
    optimization: {
        runtimeChunk: false
    },
    plugins: [new WebpackAssetsManifest()],
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                PrefixWrap('.app2', {
                                    hasAttribute: 'planet-inline',
                                    prefixRootTags: true
                                })
                            ]
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    }
};

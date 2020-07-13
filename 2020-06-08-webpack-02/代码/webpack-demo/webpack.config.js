const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    mode: 'production',

    devtool: 'source-map',

    entry: {
        'index': './src/index.js'
    },

    output: {
        // 无论是loader，还是plugins，或者其它webpack内置的一些输出相关的目录路径都是基于该选项的
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },

    // loaders: options API
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/,
                // 如果loader需要配置，需要使用对象形式
                use: {
                    // 要加载的loader
                    // loader: 'file-loader',
                    loader: 'url-loader',
                    // loader的配置
                    options: {
                        // placeholder 占位符 [name] 源资源模块的名称 [ext] 源资源模块的后缀
                        name: "[name]_[hash].[ext]",
                        //打包后的存放位置
                        outputPath: "./images",
                        // 打包后文件的 url
                        publicPath: '/images',
                        // 小于 100 字节转成 base64 格式
                        limit: 100
                    }
                }
            },

            {
                test: /\.css$/,
                use: [
                    // 如果有多个loader，执行顺序是从后到前
                    // "style-loader",

                    {
                        loader: MiniCssExtractPlugin.loader
                    },

                    {
                        loader: "css-loader",
                        options: {
                            // 启用/禁用 url() 处理
                            url: true,
                            // 启用/禁用 @import 处理
                            import: true,
                            // 启用/禁用 Sourcemap
                            sourceMap: false
                        }
                    },

                ]
            }
        ]
    },

    // plugins: 命令式
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '开课吧',
            template: './html/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        })
    ],

    devServer: {
        // 添加一个新的目录到当前服务根目录下
        contentBase: "./public",

        // 开启热更新
        hot:true,
        hotOnly:true,
          
        // proxy ，代理请求 - 拦截请求
        proxy: {
            // http://localhost:9999/api/getUser
            '/api': {
                // 域名到转发规则
                target: 'http://localhost:9999',
                // 路径转发规则（重写规则）
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }

}
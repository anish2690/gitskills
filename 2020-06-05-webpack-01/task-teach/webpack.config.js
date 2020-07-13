const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const dev = "development";
const pro = "production";
const deflu = dev;

module.exports = {
    entry: "./src/index.js",
    mode: deflu == dev ? "development" : "production",
    // devtool ‘会将每一个打包后生产的文件进行sourcemap映射，自动生成一个打包前和打包后的文件，方便开发者去debug错误信息
    devtool: "inline-source-map",
    output: {
        // 生产目录的两种写法
        path: path.resolve(__dirname + "/dist"), 
        // path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    // module配置webpack需要依赖的加载器loader
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            name: "[name]_[hash].[ext]",
                            outputPath: './images',
                            // 由于涉及到各方面因素影响，需要将图片url路径设置成绝对路径
                            publicPath: "/images"
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: true,
                            import: true,
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    // 插件的配置
    plugins: [
        // 生产html模板，指定到dist目录，指定导入js到模板中
        new HtmlWebpackPlugin({
            title: "欢迎来到开课吧",
            template: "./template/index.html",
            filename: "index.html"
        }),
        // 重构dist项目
        new CleanWebpackPlugin(),
        // 将css打包到独立的文件
        new MiniCssExtractPlugin({
            filename: "./css/[name].css"
        })
    ],
    // 内置服务器配置
    devServer: {
        // 添加目录到虚拟根目录中
        contentBase: "./assets",
        port: 8080,
        open: true,
        // 代理请求，会将请求在这里拦截，然后转发到其他服务器
        proxy: {
            // 可以转发多个服务器
            '/api': {
                // 域名转发规则
                target: "http://localhost:8888",
                // 路径转发规则 重写路径
                pathRewrite: { '^/api': '' }
            },
            '/res': {
                // 域名转发规则
                target: "http://localhost:8889",
                // 路径转发规则 重写路径
                pathRewrite: { '^/res': '' }
            }
        }
    }
}
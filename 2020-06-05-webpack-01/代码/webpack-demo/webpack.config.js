const path = require('path');

// 因为webpack 运行在node环境，该文件也是执行在node环境，所以我们可以在这里调用node下所有api，库……

// 这个导出去的对象就是webpack打包的时候用到的配置
module.exports = {

    // 针对不同的环境设置打包过程中所做的一些优化处理
    mode: 'development',

    /**
     * 入口文件
     *  所有的项目都是入口文件开始都，webpack根据入口文件都依赖（import）进行分析，加载被依赖都其它文件……，依次递归这个过程
     * index.js -> lib.js -> lib2.js
     * 把所有依赖的文件内容进行读取，最后进行打包生成最终的文件（可被浏览器正确执行的代码）
     * 
     * SPA
     *  Signle Page Application - 单页面应用 - 单入口文件模式
     */
    // entry: './src/index.js',

    // 多页面应用：index.html list.html 多对一，多入口单出口
    // entry: [
    //     './src/index.js',
    //     './src/list.js'
    // ],

    // 多页面应用：多对多，多入口，多出口，这种情况下，output 的 filename 就不能是固定的名称
    entry: {
        'index': './src/index.js',
        // 'list': './src/list.js'
    },

    /**
     * 出口配置
     *  打包后要生成的文件相关配置信息
     */
    output: {
        // 打包后的模块文件存放的路径（必须是绝对的路径）
        path: path.resolve(__dirname, 'dist'),

        // 要生成的模块文件的名称
        // filename: 'index.js'

        filename: '[name].js'
    },

    module: {
        // 配置的就是模块加载解析规则（loader）
        rules: [
            // 每一个对象就一个模块加载解析规则
            {
                // 模块对匹配规则
                test: /\.txt$/,
                // 被加载对模块匹配上面对test的时候，所调用的loader
                use: 'raw-loader'
            },

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
                        publicPath: '../dist/images',
                        // 小于 100 字节转成 base64 格式
                        limit: 100
                    }
                }
            },

            {
                test: /\.css$/,
                use: [
                    // 如果有多个loader，执行顺序是从后到前
                    "style-loader",

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
    }

}


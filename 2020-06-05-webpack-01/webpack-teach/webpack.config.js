/**
 * 该文件是在node运行环境中执行，因此可以调用node下的API，包括文件操作目录操作等
 * 导出的对象是webpack打包时运行的配置
 * 1.entry 入口文件，所有的项目都是从入口文件中开始，Webpack会根据入口文件进行解析和加载依赖，import加载其他被依赖的文件
 *   依次递归进行解析，层层递归，将所有依赖的文件进行读取，最后生成一个可被浏览器执行的文件
 * 2.output 输出文件，将打包之后生成的文件写入到指定的目录中，该目录能够被浏览器所执行。
 */
const path = require('path');

const dev = "development";
const pro = "production";
let defule = dev;
module.exports = {
    /**
     * 一对一 entry: "./src/main.js",
     * 多对一 entry: ["./src/main.js","./scr/list.js"],
     * 多对多 entry: {"main": "./src/main.js","list": "./src/list.js"}
     */
    // 入口文件
    entry: "./src/main.js",
    //提供模式配置选项告诉 webpack 相应地使用其内置的优化。会根据开发环境，生产环境，还是测试环境进行打包生成代码的优化
    /**
     * development: 开发环境
     * production： 生产环境
     * none： 没有环境
     * 如果没有设置，webpack 将把 production 设置为 mode 的默认值。
     */
    mode: defule == dev ? "development" : "production",
    // 打包之后要生成文件的相关配置
    output: {
        // 输出目录作为绝对路径。
        path: path.resolve(__dirname, "dist"),
        // filename 此选项确定每个输出包的名称。 Bundle 将写入 output.path 选项指定的目录。
        // 使用 "[name].js",可以输出多个js，这在需要分割代码的时候极为有效，通常用于多对多的关系
        filename: "[name].js" //使用于多对多
        // filename: "index.js" //适用于一对一或者多对一
    },
    module: {
        // 配置的模块加载解析规则
        rules: [
            // 每一个对象就是一个模块加载解析规则
            {
                test: /\.txt$/,
                // 对指定模块进行解析的加载器
                use: "raw-loader"
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                // 如果存放的路径需要配置，就需要使用对象进行配置
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]', //打包之后的文件名
                        outputPath: "./images", //文件存放的物理位置
                        publicPath: "../dist/images", //文件存放的虚拟位置
                        // 小于 100 字节转成 base64 格式
                        limit: 100
                    },
                }
            },
            {
                test: /\.css$/,
                // 当有多个loader需要执行，那么执行的顺序就是从右到左，或者从后到前，即先执行后面的，再执行前面的。
                use: [
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
                    }
                ]
            }
        ]
    }
}
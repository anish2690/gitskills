// function kkb() {
//     return '欢迎大家来到开课吧学习！';
// }


// define(function() {
//     function kkb() {
//         return '欢迎大家来到开课吧学习！';
//     }

//     return {
//         kkb
//     }
// });


const lib = function() {
    function kkb() {
        return '欢迎大家来到开课吧学习！';
    }

    return {
        kkb
    }
}

const umd = function(root, factory) {

    if (typeof module === "object" && typeof module.exports === "object") {
        // Node, CommonJS-like，node 环境下
        module.exports = factory();
    } else if (typeof define === "function" && define.amd) {
      	// AMD 模块环境下
        define(factory);
    } else {
        root.lib = factory();
    }

}

umd(this, lib);
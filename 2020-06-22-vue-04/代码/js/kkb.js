// function kkb() {
    // function axios() {
    //     console.log('axios');
    // }
    
    // Vue.prototype.http = axios;
// }

// function axios() {
//     console.log('axios');
// }

// function fetch() {
//     console.log('axios');
// }

const kkb = {
    install( _Vue, options ) {
        // console.log('install', _Vue, options);

        // 给 Vue 原型上添加了一个共有的方法
        // _Vue.prototype.http = axios;

        // 如果我想要给每个组件添加一个独有的特征（方法，属性）

        Vue.mixin({
            created: function () {
                // console.log('mixin - created');
                // this.kkb = '开课吧 - ' + Math.random();

                // 这里使用的http库不确定，由外部决定
                this.http = function() {
                    console.log('日志');
                    // axios();
                    // console.log(this.$options.adaptor);
                    // this.$options.adaptor();

                    if ( this.$options.adaptor ) {
                        this.$http = this.$options.adaptor;
                    }

                    if ( this.$options.parent && this.$options.parent.$http ) {
                        this.$http = this.$options.parent.$http;
                    }

                    this.$http();
                }
            }
        })
    }
}
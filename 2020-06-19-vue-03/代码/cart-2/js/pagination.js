Vue.component('kkb-pagination', {

    // 类似给函数定义形参
    props: ['total', 'prepage', 'page'],

    // 配合v-model
    // v-model看起来挺好用的，但是：
    //  1、不能同时绑定多个属性
    //  2、数据的修改比较隐蔽
    model: {
        // v-model的数据是绑定到 props 中 page 属性，默认是value
        prop: 'page',
        // event，当组件 emit 的事件名称是 event 指定，那么就根据上面的prop指定属性去更改对应的值，默认是input
        event: 'change'
    },

    data() {
        // data 中是可以访问到 props 的
        return {
            pages: Math.ceil((this.total / this.prepage))
        }
    },

    template: `
        <div class="pagination">
            <a href="" class="prev">上一页</a>

            <a 
                href="javascript:;" 
                v-for="p of pages"
                :class="{current: p == page}"

                @click="changePage(p)"
            >{{p}}</a>

            <a href="" class="next">下一页</a>
        </div>
    `,

    methods: {
        changePage(p) {
            this.$emit('change', p);
        }
    }
});
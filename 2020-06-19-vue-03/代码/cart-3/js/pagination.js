Vue.component('kkb-pagination', {

    // 类似给函数定义形参
    props: ['total', 'prepage', 'page'],

    // data() {
    //     // data 中是可以访问到 props 的
    //     // 这个data只会在组件第一次初始化的时候执行一次，组件是不会触发data重新调用
    //     return {
    //         pages: Math.ceil((this.total / this.prepage))
    //     }
    // },

    computed: {
        pages() {
            return Math.ceil((this.total / this.prepage));
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

            <a href="" @click="changePrepage">修改每页显示的条数为5</a>
        </div>
    `,

    methods: {
        changePage(p) {
            // 触发一个update事件，使用p去更新page（page必须是通过 .sync 来进行绑定的）
            this.$emit('update:page', p);
        },

        changePrepage(e) {
            e.preventDefault();

            this.$emit('update:prepage', 5);
        }
    }
});
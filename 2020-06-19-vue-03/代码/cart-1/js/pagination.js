Vue.component('kkb-pagination', {

    // 类似给函数定义形参
    props: ['total', 'prepage', 'page'],

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
            // this.$emit('change', p);
        }
    }
});
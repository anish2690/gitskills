Vue.component('kkb-pagination', {

    props: ['total', 'prepage', 'page'],

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
        </div>
    `,

    methods: {
        changePage(p) {
            this.$emit('update:page', p);
        }
    }
});
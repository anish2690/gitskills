Vue.component('kkb-pagination', {

    // props: ['total', 'prepage', 'page'],
    props: {
        total: {
            type: Number,
            default: 0
        },
        prepage: {
            type: Number,
            default: 5
        },
        page: {
            type: Number,
            default: 1
        }
    },

    inheritAttrs: false,
    
    data() {
        // console.log(this.$slots.default);
        return {

        }
    },

    computed: {
        pages() {
            return Math.ceil((this.total / this.prepage));
        }
    },

    template: `
        <div class="pagination" style="background: green;color: yellow">
            <slot name="left" :pages="pages" a="1"></slot>

            <a href="" class="prev">上一页</a>

            <a 
                href="javascript:;" 
                v-for="p of pages"
                :class="{current: p == page}"

                @click="changePage(p)"
            >{{p}}</a>

            <a href="" class="next">下一页</a>

            <slot></slot>
        </div>
    `,

    methods: {
        changePage(p) {
            this.$emit('update:page', p);
        }
    }
});
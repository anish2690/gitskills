<template>
    <div class="pagination">
        <a href="" class="prev">上一页</a>

        <a 
            href="javascript:;" 
            v-for="p of pages"
            :key="p"
            :class="{current: p == page}"

            @click="changePage(p)"
        >{{p}}</a>

        <a href="" class="next">下一页</a>
    </div>
</template>

<script>
export default {
    name: 'Pagination',

    props: ['total', 'prepage', 'page'],

    computed: {
        pages() {
            return Math.ceil((this.total / this.prepage));
        }
    },

    methods: {
        changePage(p) {
            console.log('p', p, this.page)
            if (p !== this.page) {
                this.$emit('change', p);
            }
            this.$emit('update:page', p);

        }
    }
}
</script>
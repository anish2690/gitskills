Vue.component("my-component", {

    props: ["total", "prepage", "page"],

    // model的缺陷： 只能指定固定的属性，无法实现多个；会进行隐式设置，无法检查组件的具体情况，不利于维护
    // model: {
    //     prop: "page",
    //     event: "changePages"
    // },

    // 使用sync可以实现多个双向数据绑定

    /**
     * slot:
     *      1.由于slot是vue内置的一种写法，主要用于将子组件内部的结构解析成VNode后，帮助我们将虚拟Dom转化成HTML，然后通过插槽的形式添加到子组件中   
     */
    template: ` <div class="pagination">
                    <a href="" class="prev">上一页</a>
                    
                    <a href="javascript:;" :class="{current: page == item}" v-for="item of pages" @click="handClickPages(item)">{{item}}</a>
                    
                    <a href="" class="next">下一页</a>
                    
                    <a href="" @click="ToPageViews">跳转到指定的页数</a>
                    <slot></slot>
                </div>
            `,
    /**
     * 组件中的data函数，只会在组件第一次初始化的时候执行一次，之后组件相关数据更新，也不会影响data里的数据了
     * 因此在使用.sync渲染相关依赖的方法时，为了保证视图能够及时准确更新，应该使用computed计算属性来进行视图渲染
     */

    // data() {
    //     return {
    //         pages: Math.ceil((this.total / this.prepage))
    //     }
    // },

    computed: {
        pages() {
            return Math.ceil((this.total / this.prepage));
        }
    },
    mounted() {
        console.log(this.$slots)
    },
    methods: {
        handClickPages(v) {
            this.$emit('update:page', v)
        },
        ToPageViews(e) {
            e.preventDefault();
            this.$emit("update:prepage", 10)
        },
        goToPreViews() {
            const val = +this.$refs.input.value;
            this.$emit('update:page', val);
            // this.$refs.input.value = "";
        }
    }
})
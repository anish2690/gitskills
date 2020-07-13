Vue.component('kkb-dialog', {
    props: [
        "title",
        "visible",
        "open",
        "close"
    ],
    template: `
        <div class="dialog" v-show="visible">
            <div class="dialog-header">
                <span class="dialog-title">提示</span>
                <i class="dialog-close" @click="close">x</i>
            </div>
            <div class="dialog-body">
                <slot></slot>
            </div>
        </div>
    `,
    mounted() {
        console.log(this.title, this.visible)
    },
});
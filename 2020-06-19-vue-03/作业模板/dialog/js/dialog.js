Vue.component('kkb-dialog', {
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
    `
});
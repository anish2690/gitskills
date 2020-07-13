import Vue from 'vue';
import vueRouter from 'vue-router';

import Home from "@/views/Home";
import About from "@/views/About";
Vue.use(vueRouter);

const router = new vueRouter({
    mode: "hash",
    // 路由对象
    routes: [
        {
            path: "/home",
            component: Home
        },
        {
            path: "/about",
            component: About
        }
    ]
});
export default router;

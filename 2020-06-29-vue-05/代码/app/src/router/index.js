import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import Item from '@/views/Item';
import About from '@/views/About';

Vue.use(VueRouter);

const router = new VueRouter({
    // 路由的配置对象

    // 路由模式：history，hash
    mode: 'history',

    // 路由映射表
    routes: [
        // 对象：url => 组件的映射关系
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/item/:id(\\d+)',
            name: 'Item',
            component: Item
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
});



router.beforeEach( (to, from, next) => {
    // 通过 localStorage 中转，登录成功以后，把登录的用户信息（后端返回的）存储在 localStorage 中，在这里进行读取
    let userInfo = {id: 0, name: 'mt'};

    if (to.name == 'Home') {
        if (userInfo.id > 0) {
            next();
        } else {
            // 跳转到登录页
            // next({name: 'Login'})
            next();
        }
    } else {

    }
    
} );

export default router;


<template>
  <div id="main">
    <ul class="items-list">
        <li v-if="error">该商品不存在！</li>
        <li v-else-if="item" class="panel">
            <img :src="item.cover" alt class="cover" />
            <div class="name">{{item.name}}</div>
            <div class="price">{{item.price|rmb}}</div>
        </li>
        <li v-else>商品信息加载中……</li>
    </ul>
  </div>
</template>

<script>
import {getItem} from '@/api'
import rmb from '@/filters/rmb'

export default {
  name: "Item",

  data() {
    return {
      item: null,
      error: false
    };
  },

  filters: {
      rmb,
  },

  async created() {
      // $router: 就是 new VueRouter 得到的对象，一个用于表示整个应用的路由对象，
      // $route: 根据当前访问的url匹配得到（构建的一个）路由对象
    //   console.log(this.$route);
    this.error = false;
    let id = this.$route.params.id;
    
      try {
          let rs = await getItem(id);
          console.log(rs);
        this.item = rs.data;
      } catch (e) {
          console.log('出错了');
          this.error = true;
      }
  }
};
</script>
<template>
  <div id="main">
    <ul class="items-list">
      <router-link
        tag="li"
        class="panel"
        v-for="item of items"
        :key="item.id"
        :to="{name: 'Item', params: {id: item.id}}"
        style="cursor:pointer"
      >
        <img :src="item.cover" alt class="cover" />
        <div class="name">{{item.name}}</div>
        <div class="price">{{item.price|rmb}}</div>
      </router-link>
    </ul>

    <!-- <li class="panel" v-for="item of items" :key="item.id">
        <a href="/item/1"><img :src="item.cover" alt class="cover" /></a>
        
            <img :src="item.cover" alt class="cover" />
        
        <div class="name">{{item.name}}</div>
        <div class="price">{{item.price|rmb}}</div>
    </li>-->

    <div class="pagination-container">
      <Pagination :total="total" :prepage="prepage" :page.sync="page" @change="changePage"></Pagination>
    </div>
  </div>
</template>

<script>
import { getItems } from "@/api";
import Pagination from "@/components/Pagination";
import rmb from "@/filters/rmb";

export default {
  name: "Home",

  data() {
    return {
      page: 1,
      prepage: 10,
      total: 0,
      items: []
    };
  },

  filters: {
    rmb
  },

  components: {
    Pagination
  },

  async created() {
      // 当路由切换复用了当前组件，那么组件是不会销毁重建的
      // 因为现在的page来源于url中的queryString，所以当组件第一次渲染的时候，我们就从queryString去获取page值，赋值给this.page
      this.page = Number(this.$route.query.page) || 1;
      console.log(this.page);

    this.getItems();
  },

  beforeRouteUpdate(to, from, next) {   // 守卫!!!!
    //   console.log('beforeRouteUpdate');
    // console.log(to);

    next();

    // 如果通过 this.$route 去获取数据的话，那么一定要在next后面，否则$route，还是导航确认以前的路由
    this.page = Number(to.query.page) || 1;
    // console.log(this.page);
    this.getItems();
  },

  methods: {
    changePage(page) {
      this.$router.push({
        name: "Home",
        query: {
          page
        }
      });
    },

    async getItems() {
      try {
        let rs = await getItems({
          page: this.page,
          prepage: this.prepage
        });

        // console.log(rs.data)
        this.items = rs.data.items;
        this.page = rs.data.page;
        this.prepage = rs.data.prepage;
        this.total = rs.data.total;
      } catch (e) {}
    }
  }
};
</script>
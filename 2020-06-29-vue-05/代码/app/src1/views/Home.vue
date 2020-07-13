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
      this.page = Number(this.$route.query.page) || 1;
    this.getItems();
  },

    // watch: {
    //     $route() {
    //       //   console.log('route变了', this.$route);
    //       this.getItems();
    //     }
    // },

  beforeRouteUpdate(to, from, next) {
      // 当路由更新的时候触发
      // 守卫
      console.log('beforeRouteUpdate');

      next();

      this.page = Number(this.$route.query.page) || 1;
      console.log("this.page", this.page)

      this.getItems();
  },

  methods: {
    changePage(page) {
      //   this.getItems();

      // 路由切换
      // 如果路由的切换目标组件还是当前组件，那么这个组件将会被复用，而不会销毁重建
      console.log('触发了change', page);

      this.$router.push({
        name: "Home",
        query: {
          page: page
        }
      });
    },

    async getItems() {
        // console.log("this.page", this.page)
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
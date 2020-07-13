<template>
  <div id="main">
    <ul class="items-list">
      <li class="panel">
        <img src alt class="cover" />
        <div class="name">HUAWEI P40 ProHUAWEI P40 ProHUAWEI P40 Pro</div>
        <div class="price">¥5988</div>
      </li>

      <li class="panel">
        <img src alt class="cover" />
        <div class="name">HUAWEI P40 Pro</div>
        <div class="price">¥5988</div>
      </li>

      <li class="panel">
        <img src alt class="cover" />
        <div class="name">HUAWEI P40 Pro</div>
        <div class="price">¥5988</div>
      </li>

      <li class="panel">
        <img src alt class="cover" />
        <div class="name">HUAWEI P40 Pro</div>
        <div class="price">¥5988</div>
      </li>

      <li class="panel">
        <img src alt class="cover" />
        <div class="name">HUAWEI P40 Pro</div>
        <div class="price">¥5988</div>
      </li>

      <li class="panel">
        <img src alt class="cover" />
        <div class="name">HUAWEI P40 Pro</div>
        <div class="price">¥5988</div>
      </li>

      <li class="panel">
        <img src alt class="cover" />
        <div class="name">HUAWEI P40 Pro</div>
        <div class="price">¥5988</div>
      </li>

      <li class="panel">
        <img src alt class="cover" />
        <div class="name">HUAWEI P40 Pro</div>
        <div class="price">¥5988</div>
      </li>

      <li class="panel">
        <img src alt class="cover" />
        <div class="name">HUAWEI P40 Pro</div>
        <div class="price">¥5988</div>
      </li>

      <li class="panel">
        <img src alt class="cover" />
        <div class="name">HUAWEI P40 Pro</div>
        <div class="price">¥5988</div>
      </li>

      <li class="panel">
        <img src alt class="cover" />
        <div class="name">HUAWEI P40 Pro</div>
        <div class="price">¥5988</div>
      </li>

      <li class="panel">
        <img src alt class="cover" />
        <div class="name">HUAWEI P40 Pro</div>
        <div class="price">¥5988</div>
      </li>
    </ul>

    <div class="pagination-container">
      <div class="pagination">
        <a href class="prev">上一页</a>
        <a href>1</a>
        <a href>2</a>
        <a href>3</a>
        <a href class="current">4</a>
        <a href>5</a>
        <a href>6</a>
        <a href>7</a>
        <a href>8</a>
        <a href class="next">下一页</a>
      </div>
    </div>
  </div>
</template>

<script>
import { getItems } from "../api";
export default {
  name: "Home",
  data() {
    return {
      arr: [0, 1, 2],
      num: 3
    };
  },
  async created() {
    const reslut = await getItems();
    console.log(reslut);

    if (this.handleClick(this.num)) {
      this.num = 1;
      console.log(this.num)
    } else {
      console.log("2");
    }
  },
  mounted() {},
  methods: {
    handleClick(num) {
      return this.arr.includes(num);
    }
  }
};
</script>

<style>
</style>
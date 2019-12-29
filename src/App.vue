<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  // 通过provider来提供变量,此处为重新加载路由的方法
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    // 通过对router-view的v-if属性赋值，重新加载路由
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>
<style>
</style>

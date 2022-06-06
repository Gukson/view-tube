<template>
  <span class="font-sans">
    <TheNavbar/>
    <router-view v-show="show" :key="`${$route.path}${JSON.stringify($route.query)}`" @ready="ChangeIsLoading"/>
    <span v-show="!show" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <AppSpinner />
    </span>
  </span>

</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import AppSpinner from "@/components/AppSpinner";

export default {
  components: {AppSpinner, TheNavbar},
  data() {
    return {
      show: false
    }
  },
  methods: {
    ChangeIsLoading() {
      this.show = true
    },
  },
  watch: {
    $route() {
      this.show = false
    }
  }
}

</script>

<style lang="scss">
body {
  background-color: rgb(30 41 59);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

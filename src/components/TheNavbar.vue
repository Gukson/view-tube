<template>
  <div class="pd-0 m-0 w-full h-16 bg-black_main flex items-center">
    <div class="p-0">
      <hamburger_icon @showing="isShowing = !isShowing"/>
    </div>
    <p class="text-2xl text-white_main">ViewTube</p>
  </div>
</template>

<script>
import {ref} from 'vue'
import hamburger_icon from "@/components/hamburger_icon";

export default {
  name: "TheNavbar",
  components: {
    hamburger_icon
  },
  setup() {
    const isShowing = ref(false)
    // const showMenu = () => {
    //
    // }
    return {
      isShowing,
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="upper h-full w-52 bg-black_main absolute left-0 flex flex-col">
    <router-link to="/" class="py-4 grid grid-cols-2 gap-3 hover:bg-gray-900">
      <fa size="2x" class="mx-4 text-white_main dark:md:hover:bg-grey_main" icon="home"></fa>
      <p class="text-white_main mr-2 text-2xl">Home</p>
    </router-link>
    <router-link to="/about" class="py-4 grid grid-cols-2 gap-3 content-end hover:bg-gray-900">
      <fa size="2x" class="mx-6 text-white_main dark:md:hover:bg-grey_main" icon="question"></fa>
      <p class="text-white_main mr-2 text-2xl">About</p>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'drop_down',
  setup() {

    return {

    }
  }
}
</script>

<style scoped>
.upper {
  z-index: 99 !important;
}
</style>
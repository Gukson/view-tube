<template>
  <form class="p-4 flex" @submit.prevent="searchFor(query)">
    <input type="search" class="border-none p-2 text-2xl rounded focus:outline-none w-10/12"
           placeholder="Look for a movie..." v-model="query"
    >
    <button class="p-2 hover:cursor-pointer text-white_main" type="submit">
      <fa size="2x" icon="search"></fa>
    </button>
  </form>
</template>

<script>



export default {
  name: "search_bar",

  data() {
    return {
      query: '',
      searching: false
    }
  },
  methods: {
    async searchFor(q) {
      this.$store.commit('purgeState', {toPurge: 'movies'})
      this.query = ''
      // zmiana loadingu w store, bo search_bar to child navbar
      await this.$store.dispatch('getListOfMovies', {link: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${q}&type=film&key=AIzaSyBktFeY2Q4FSn2aUAUVK5Zzzs_Hv52ECJ4`})
    }
  }
}
</script>

<style scoped>

</style>
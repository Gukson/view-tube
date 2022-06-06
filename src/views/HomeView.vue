<template>
  <span class="flex flex-col">
    <search_bar class="justify-center"/>
    <SearchResults :results="channels_and_movies" v-if="asyncDataStatus_ready" />
  </span>
</template>

<script>
// @ is an alias to /src
// import axios from "axios";
import asyncDataStatus from "@/composables/asyncDataStatus";
import SearchResults from "@/components/SearchResults";
import search_bar from "@/components/search_bar";


export default {
  name: 'HomeView',
  components: {
    SearchResults,
    search_bar
  },
  mixins: [asyncDataStatus],
  data() {
    return {
      // results: {},
      // channels_and_movies: []
    }
  },
  computed: {
    channels_and_movies() {
      // console.log('lent', this.$store.state.movies.length)
      return this.$store.state.movies
    }
  },
  async created() {
    this.$store.commit('purgeState', { toPurge: 'movies'})
    await this.$store.dispatch('getListOfMovies', {link: 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyBVr_YEdoGPKEp4OiGqM1muoGPE-05ePd8'})
    this.asyncDataStatusChange()
  }
}
</script>

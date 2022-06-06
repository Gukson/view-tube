<template>
<!--  <div class="m-auto w-2/3 h-auto bg-white">ss</div>-->
  <router-link :to="`/movie/${createLink(movie)}`" class="flex flex-col items-center bg-gray-800 border-b-2 border-black_main shadow-md md:flex-row sm:w-2/3 w-96 sm:m-auto hover:bg-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="p-3 object-contain aspect-video rounded-xl" :src="movie.filmPhoto" alt="">
    <div class="">
      <span class="grid grid-cols-1">
        <h5 class="mb-2 text-base w-96 font-bold tracking-tight text-white_main dark:text-white">{{ movie.title }}</h5>
        <span class="bottom-0 my-4 grid grid-cols-3">
          <span class="flex flex-col">
            <fa icon="thumbs-up" class="text-white_main" size="2x"></fa>
            <label class="text-white_main">{{ formatNumber(movie.likeCount)}}</label>
          </span>
          <span class=" flex flex-col">
            <fa icon="eye" class="text-white_main" size="2x"></fa>
            <label class="text-white_main">{{ formatNumber(movie.viewCount) }}</label>
          </span>
          <span class="flex flex-col items-center">
            <img class="rounded-full w-12" :src="movie.channelPhoto">
            <label class="text-white_main">{{ movie.channelName }}</label>
          </span>
        </span>
      </span>
    </div>
  </router-link>
</template>

<script>
import {computed} from 'vue'
import { numFormat } from '@/composables/changeNumbers'

export default {
  name: "YtVideoListElem",
  props: {
    film: {
      type: Object
    }
  },
  setup(props) {

    // przekowertuj liczbę na K, M itd. [156k]
    const formatNumber = (n) => {
      return numFormat(n, 1)
    }

    const movie = computed(() => {
      // stwarzanie porządnego obiektu z filemem, rozdzielenie pojedynczych dużych obiektów
      return {...props.film, ...props.film.statistics}
    })
    const createLink = (movie) => {
      return movie.id.videoId ? movie.id.videoId : movie.id
    }

    return {
      movie,
      createLink,
      formatNumber
    }
  }
}
</script>

<style scoped>

</style>
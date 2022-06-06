<template>
  <h1 class="text-white_main sm:text-2xl text-1xl">{{ Film.title }}</h1>
  <section class="">
    <span class="text-white_main my-7 bottom-0 grid grid-cols-3">
      <span class="flex flex-col">
        <fa icon="thumbs-up" class="text-white_main" size="2x"></fa>
        <label class="text-white_main">{{ changeNum(Film.likeCount) }}</label>
      </span>
      <span class=" flex flex-col">
        <fa icon="eye" class="text-white_main" size="2x"></fa>
        <label class="text-white_main">{{ changeNum(Film.viewCount) }}</label>
      </span>
      <span class="flex flex-col items-center">

        <img class="rounded-full w-12" :src="Film.channelPhoto">
        <label class="text-white_main">{{ Film.channelName }}</label>
      </span>
    </span>
    <button @click="isShowing = !isShowing" class="bg-gray-700 hover:bg-gray-900 text-white font-bold my-4 py-1 px-6 rounded">
      Description
    </button>
    <transition>
      <article class="w-full text-white_main px-4" v-show="isShowing">{{ Film.description }}</article>
    </transition>
  </section>
</template>

<script>
import { numFormat } from "@/composables/changeNumbers";

export default {
  name: "FilmDescription",
  props: {
    film: Object,
  },
  data() {
    return {
      isShowing: false
    }
  },
  computed: {
    Film() {
      return {...this.film, ...this.film.statistics}
    }
  },
  methods: {
    changeNum(n) {
      return numFormat(n, 1)
    }
  }
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
<template>
  <div class="text-white_main ml-3" v-for="(film, i) in results" :key="i">
    <YtVideoListElem :class="classObject(results, i)" :film="film"/>
  </div>
</template>

<script>
import YtVideoListElem from "@/components/YtVideoListElem";

export default {
  name: "SearchResults",
  components: {
    YtVideoListElem
  },
  props: {
    results: Array
  },
  methods: {
    classObject(list, i) {
      return {
        'rounded-t-lg': i === 0,
        'rounded-b-lg': list.length - 1 === i
      }
    }
  },
}
</script>

<style scoped>

</style>
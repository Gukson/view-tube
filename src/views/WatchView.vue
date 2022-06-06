<template>
  <span class="z-0 static">
    <div class="flex sm:p-6 flex-col">
      <div class="h-auto ">
        <yt :src="`https://www.youtube.com/watch?v=${id}`"
            :width="width"
            :height="height"
            v-if="asyncDataStatus_ready"
            @ready="asyncDataStatusChange"
            ref="youtube" class=" m-auto object-scale-down"></yt>
      </div>
    </div>
    <FilmDescription :film="Film"/>
    <RelatedVideos :id="idGet"/>
  </span>

</template>

<script>


import asyncDataStatus from "@/composables/asyncDataStatus";
import FilmDescription from "@/components/FilmDescription";
import RelatedVideos from "@/components/RelatedVideos";
import VueMobileDetection from 'vue-mobile-detection'

export default {
  name: "WatchView",
  components: {RelatedVideos, FilmDescription},
  props: {
    id: String
  },
  mixins: [asyncDataStatus, VueMobileDetection],
  data(){
    return {
      width: 400,
      height: 260
    }
  },
  async mounted() {
    // dane o tym filmie
    await this.$store.dispatch('getMovieDetails', {id: this.idGet, getCurrent: true})
    this.adjustSize()
    this.asyncDataStatusChange()
  },
  // trzeba było użyć watch/computed bo w mounted prop jest jeszcze nie dostępny, trzeba obserwować kiedy się pojawi
  computed: {
    idGet() {
      return this.id
    },
    Film() {
      return this.$store.state.currentFilm
    }
  },
  methods: {
    adjustSize(){
      if (this.$isMobile()) {
        this.width = 400
        this.height = 260
      }else {
        this.width = 740
        this.height = 460
      }
    }
  }
}
</script>

<style scoped>

</style>
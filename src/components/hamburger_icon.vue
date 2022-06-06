<template>
  <div class="relative py-1 sm:max-w-xl mx-auto" v-click-outside="()=>outsideClick()">
    <button class="w-14 h-14 focus:outline-none bg-black_main rounded" @click="changeShowing">
      <div class="block w-5 absolute left-6 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
        <span  class="block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': isShowing,' -translate-y-1.5': !isShowing }"></span>
        <span  class="block absolute  h-0.5 w-7 text-white bg-current   transform transition duration-500 ease-in-out" :class="{'opacity-0': isShowing } "></span>
        <span  class="block absolute  h-0.5 w-7 text-white bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': isShowing, ' translate-y-1.5': !isShowing}"></span>
      </div>
    </button>
  </div>
  <transition>
    <drop_down v-show="isShowing"/>
  </transition>
</template>

<script>
import drop_down from "@/components/drop_down";

export default {
  name: 'hamburger_icon',
  components: {
    drop_down
  },
  data() {
    return {
      isShowing: false
    }
  },
  methods: {
    changeShowing() {
      this.$emit('showing')
      this.isShowing = !this.isShowing
    },
    outsideClick() {
      this.isShowing = false
    }
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {

  transition: all .4s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(200px);
  opacity: 0;

}
</style>
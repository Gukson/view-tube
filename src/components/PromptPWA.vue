<!-- PWAPrompt.vue -->
<template>
  <div class="text-white_main text-1xl" v-if="shown">
    <p>Add app to home screen?</p>

    <button class="bg-green-500 hover:bg-green-700 mx-1 text-white font-bold py-2 px-4 rounded-full" @click="installPWA">
      Install!
    </button>

    <button class="bg-red-500 hover:bg-red-700 mx-1  text-white font-bold py-2 px-4 rounded-full" @click="dismissPrompt">
      No, thanks
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shown: false
    }
  },

  mounted() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      this.installEvent = e
      this.shown = true
    })
  },

  methods: {
    dismissPrompt() {
      this.shown = false
    },

    installPWA() {
      this.installEvent.prompt()
      this.installEvent.userChoice.then((choice) => {
        this.dismissPrompt() // Hide the prompt once the user's clicked
        if (choice.outcome === 'accepted') {
          // Do something additional if the user chose to install
        } else {
          // Do something additional if the user declined
        }
      })
    },
  }
}
</script>
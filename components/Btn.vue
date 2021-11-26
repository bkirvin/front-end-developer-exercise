<template>
  <div>
    <b-button
      size="sm"
      @click="toggle">Dark Mode: {{ modeLabel }}</b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Btn',
  methods: {
    ...mapActions('settings', [
      'setDarkMode'
    ]),
    toggle () {
      this.setDarkMode(!this.darkMode)
      localStorage.setItem('darkMode', this.darkMode)
      this.$colorMode.preference = this.displayMode
    }
  },
  computed: {
    ...mapState('settings', [
      'darkMode'
    ]),
    modeLabel () {
      console.log('btn dark mode', this.darkMode)
      return this.darkMode ? 'ON' : 'OFF'
    },
    displayMode () {
      return this.darkMode ? 'dark' : 'light'
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 200;
}
</style>
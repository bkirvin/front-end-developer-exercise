<template>
  <div>
    Dark Mode :
    <b-button
      @click="toggle">{{ label }}</b-button>
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
      this.$colorMode.preference = this.displayMode
    }
  },
  computed: {
    ...mapState('settings', [
      'darkMode'
    ]),
    label () {
      return this.darkMode ? 'ON' : 'OFF'
    },
    displayMode () {
      return this.darkMode ? 'dark' : 'light'
    }
  }
}
</script>
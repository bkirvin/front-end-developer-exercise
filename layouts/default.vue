<template>
  <b-container>
    <b-row class="my-5">
      <b-col>
        <Btn />
        <h1>Company Inc.</h1>
        <NuxtLink
          to="/">Home</NuxtLink>
        <NuxtLink
        to="pricing">Pricing</NuxtLink>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Nuxt />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Default',
  methods: {
    ...mapActions('settings', [
      'setDarkMode'
    ])
  },
  computed: {
    ...mapState('settings', [
      'darkMode'
    ])
  },
  components: {
    Btn: require('@/components/Btn').default
  },
  mounted () {
    const mode = localStorage.getItem('darkMode')
    if (mode) {
      this.setDarkMode(mode === 'true')
    }
  }
};
</script>

<style lang="scss" scoped>
a:hover {
  text-decoration: none;
}
.nuxt-link-exact-active {
  font-weight: 800;
}
.container {
  margin-bottom: 5vh;
}
</style>

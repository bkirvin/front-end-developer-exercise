<template>
  <div>
    <b-button
      variant="primary"
      @click="navBack">
        <b-icon
          icon="chevron-left"></b-icon>BACK</b-button>
    <h4>{{ plan.name }}</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia
      exercitationem autem eveniet neque eos placeat porro tempora, sit suscipit
      sint labore laudantium inventore iste maxime dolorem quas, minus ducimus?
    </p>
    <b-row>
      <b-card
        cols="1">
        <Features
          :plan="plan" />
      </b-card>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Plan",
  layout: "default",
  methods: {
    navBack () {
      $nuxt.$router.go(-1)
    }
  },
  computed: {
    ...mapState('pricing', [
      'pricingOptions',
      'chosenPlan'
    ]),
    plan () {
      return this.pricingOptions.find(x => x.name === this.chosenPlan)
    }
  },
  components: {
    Features: require('@/components/Features').default
  }
}
</script>

<style lang="scss" scoped>
button {
  margin-bottom: 2vh;
}
.card {
  margin: auto;
  background-color: var(--bg) !important;
}
</style>

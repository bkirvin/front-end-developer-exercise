<template>
  <b-container class="text-center">
    <Modal />
    <b-row>
      <b-col class="mt-5">
        <h1>Pricing</h1>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col md="12" lg="8">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          tenetur. Eius, fugit quidem tempore, quia officia impedit possimus
          officiis doloremque autem illum reiciendis libero dignissimos
          repellendus dolores veniam error odit!
        </p>
      </b-col>
    </b-row>
    <b-row>
        <b-card-group
          v-for="(plan, index) in pricingOptions"
          :key="'plan' + index"
          class="col-lg-4">
          <b-card
            :header="plan.name"
            :border-variant="isSelectedColor(plan.name)"
            :header-bg-variant="isSelectedColor(plan.name)"
            :header-text-variant="isSelectedText(plan.name)"
            @click="selectCard(plan.name)">
              <b-card-text>
                <p
                  class="cost">${{ plan.cost }}/mo</p>
              </b-card-text>
              <b-card-text>
                <Features
                  :plan="plan" />
              </b-card-text>
              <template #footer>
                <b-button
                  class="card-btn"
                  :variant="buttonType(plan.paid)"
                  @click="callToAction">{{ plan.cta }}</b-button>
              </template>
          </b-card>
        </b-card-group>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Pricing',
  layout: 'default',
  methods: {
    ...mapActions('pricing', [
      'selectPlan'
    ]),
    buttonType (val) {
      if (val) {
        return 'primary'
      }
      return 'outline-primary'
    },
    selectCard (name) {
      this.selectPlan(name)
      setTimeout(() => {
        if ($nuxt.$route.path === '/plan') return
        this.$bvModal.show('modal-1')
      }, 50)
    },
    isSelected (name) {
      return name === this.chosenPlan
    },
    isSelectedColor (name) {
      if (this.isSelected(name)) {
        return 'primary'
      }
      return ''
    },
    isSelectedText (name) {
      if (this.isSelected(name)) {
        return 'white'
      }
      return ''
    },
    callToAction () {
      $nuxt.$router.push('plan')
    }
  },
  computed: {
    ...mapState('pricing', [
      'pricingOptions',
      'chosenPlan'
    ])
  },
  components: {
    Features: require('@/components/Features').default,
    Modal: require('@/components/Modal').default
  }
}
</script>

<style lang="scss" scoped>
p {
  color: #6c757d;
  font-size: 1.25rem;
}
.card {
  color: var(--color) !important;
  background-color: rgba(255, 255, 255, 0.1);
}
.modal-header,
.card-header {
  font-size: 1.5rem;
  font-weight: 600;
  background-color: var(--bg-secondary);
}
.card-text {
  color: var(--color);
  margin-bottom: 4vh !important;

  p {
    color: var(--color);
    font-size: 1rem;
  }
  .cost {
    font-size: 1.5rem;
    font-weight: 600; 
  }
}
.card-footer {
  position: relative;
  background-color: unset;
  border: unset;
}
.card-btn {
  position: absolute;
  z-index: 100;
  left: 50%;
  transform: translate(-50%, -100%);
}
</style>

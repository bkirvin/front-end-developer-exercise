<template>
  <div>
    <b-modal id="modal-1" title="New Plan Selected">
      <p class="my-4">You have chosen: <span>{{ chosenPlan }}</span></p>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Modal',
  computed: {
    ...mapState('pricing', [
      'chosenPlan'
    ])
  }
}
</script>

<style lang="scss" scoped>
span {
  font-weight: 800;
}
</style>
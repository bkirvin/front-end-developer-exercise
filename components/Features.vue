<template>
  <div>
    <p
      v-for="(feature, index) in plan.features"
      :key="'feature' + index">{{ feature }}</p>
  </div>
</template>

<script>
export default {
  name: 'Features',
  props: {
    plan: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.card-text {
  p {
    font-size: 1rem;
    color: var(--color);
  }
  .cost {
    font-size: 1.5rem;
    font-weight: 600;
  }
}
</style>
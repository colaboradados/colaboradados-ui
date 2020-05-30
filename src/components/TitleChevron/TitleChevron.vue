<template>
  <a :href="url">
    <h2>{{ title }}</h2>
    <span class="icons">
      <icon icon="chevron-right" />
      <icon icon="chevron-right" />
    </span>
  </a>
</template>

<script>
export default {
  name: 'TitleChevron',
  props: {
    title: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang="scss">
@import './TitleChevron.styles.scss';
</style>

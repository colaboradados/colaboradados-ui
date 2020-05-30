<template>
  <a :href="url" rel="nofollow noreferrer noopener" :target="newTab && '_blank'">
    <slot></slot>
    <span class="icons">
      <icon icon="chevron-right" />
      <icon icon="chevron-right" />
    </span>
  </a>
</template>

<script>
export default {
  name: 'LinkChevron',
  props: {
    newTab: {
      type: Boolean,
      default: true
    },
    url: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang="scss">
@import './LinkChevron.styles.scss';
</style>

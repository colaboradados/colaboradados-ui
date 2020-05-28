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
a {
  align-items: center;
  background-color: transparent;
  display: inline-flex;
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: var(--color-gray-400);
  }

  &:visited {
    color: inherit;
  }
}

.icons {
  font-size: 0.75em;
  margin-left: 1rem;
}
</style>

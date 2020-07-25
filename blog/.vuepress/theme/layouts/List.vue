<template>
  <Base>
    <h1 class="podcast-title">{{ frontmatter.title }}</h1>
    <slot></slot>
  </Base>
</template>

<script>
export default {
  computed: {
    frontmatter() {
      return this.$page.frontmatter;
    },
  },
};
</script>

<style></style>

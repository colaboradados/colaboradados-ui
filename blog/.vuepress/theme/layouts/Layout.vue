<template>
  <Base>
    <h1>{{ frontmatter.title }}</h1>
    <Content />
  </Base>
</template>

<script>
export default {
  name: "Layout",
  computed: {
    frontmatter() {
      return this.$page.frontmatter;
    },
  },
  mounted() {
    console.log(this.frontmatter);
  },
};
</script>

<style></style>

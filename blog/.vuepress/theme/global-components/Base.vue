<template>
  <Fragment>
    <Header />
    <main class="main">
      <slot></slot>
    </main>
    <Footer />
  </Fragment>
</template>

<script>
export default {
  name: "Base",
  mounted() {
    console.log("Base");
  },
};
</script>

<style>
.main {
  margin: 3rem auto 0;
  max-width: var(--max-width);
  overflow: hidden;
  padding: 0 var(--pad-horizontal);
  width: 100%;
}
</style>

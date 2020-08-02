<template>
  <Fragment>
    <Header />
    <main class="main container">
      <slot></slot>
    </main>
    <Footer />
  </Fragment>
</template>

<script>
export default {
  name: "Base",
};
</script>

<style>
.main {
  margin-top: 3rem;
  overflow: hidden;
  padding: 0 var(--pad-horizontal);
}
</style>

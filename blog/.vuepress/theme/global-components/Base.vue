<template>
  <div :class="$style.page">
    <Header />
    <main :class="[$style.main, 'container']">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Base",
};
</script>

<style lang="scss" module>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex-grow: 1;
  margin-top: 3rem;
  overflow: hidden;
  padding: 0 var(--pad-horizontal);
}
</style>

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
@import "../styles/components/Base";
</style>

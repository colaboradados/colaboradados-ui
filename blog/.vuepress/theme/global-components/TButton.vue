<template>
  <button :class="$style.button">
    <slot></slot>
    <FaIcon v-if="icon" :class="$style.icon" :icon="icon"></FaIcon>
  </button>
</template>

<script>
export default {
  name: "TButton",
  props: ["icon"],
};
</script>

<style lang="scss" module>
@import "../styles/components/TButton";
</style>

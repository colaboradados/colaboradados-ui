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
@import "../styles/tools";

.button {
  @include Paragraph;

  align-items: center;
  background: transparent;
  border: 0.3rem solid;
  border-radius: var(--border-radius);
  display: inline-flex;
  padding: 1rem 1.5rem;
}

.icon {
  font-size: inherit;
  margin-left: 1ch;
}
</style>

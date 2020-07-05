<template>
  <a :href="url" target="_blank" rel="noopener noreferrer">
    <slot></slot>
  </a>
</template>

<script>
import { PLATFORMS } from "@helpers/constants";

export default {
  name: "Link",
  props: ["url"],
};
</script>

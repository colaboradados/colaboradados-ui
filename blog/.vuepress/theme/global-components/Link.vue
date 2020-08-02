<template>
  <a
    :href="url"
    :target="getTarget()"
    :rel="isExternal ? 'noopener noreferrer' : null"
  >
    <slot></slot>
  </a>
</template>

<script>
import { PLATFORMS } from "@helpers/constants";

export default {
  name: "Link",
  props: ["url", "target"],
  computed: {
    isExternal() {
      return /^http/.test(this.url);
    },
  },
  methods: {
    getTarget() {
      if (this.target) return this.target;

      return this.isExternal ? "_blank" : null;
    },
  },
};
</script>

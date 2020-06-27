<template>
  <a
    :href="getUrl(this.url, this.platform)"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot></slot>
  </a>
</template>

<script>
import { PLATFORMS } from "../helpers/constants";

export default {
  name: "Link",
  props: ["platform", "url"],
  methods: {
    getUrl: (url, platform) =>
      platform ? `${PLATFORMS[platform].url}/${url}` : url,
  },
};
</script>

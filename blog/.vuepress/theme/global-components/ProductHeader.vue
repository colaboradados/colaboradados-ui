<template>
  <header>
    <p>{{ product }} | {{ data.title }}</p>
    <time :datetime="data.date">{{ date }}</time>
  </header>
</template>

<script>
import moment from "moment";
import { formatArtcileTimestap } from "@helpers/patterns";

export default {
  name: "ProductHeader",
  props: ["product", "data"],
  computed: {
    date() {
      return moment(this.data.date).format(formatArtcileTimestap);
    },
  },
};
</script>

<style></style>

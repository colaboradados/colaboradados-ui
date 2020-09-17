<template>
  <Base>
    <h1>{{ frontmatter.title }}</h1>
    <DB id="database" />
  </Base>
</template>

<script>
import axios from "axios";

import DB from "@components/DB";

// import api from "@utils/api";
import { getMetaContent } from "@helpers/get";

export default {
  components: {
    DB,
  },
  computed: {
    frontmatter() {
      return this.$page.frontmatter;
    },
  },
  async created() {
    this.isLoading = true;
    // await axios
    //   .get(URL_DATABASES)
    //   .then((response) => {
    //     this.isLoading = false;
    //     this.csvData = response.data;
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     throw Error(error);
    //   });
  },
};
</script>

<style lang="scss" module>
// @import "../styles/layouts/Database";
</style>

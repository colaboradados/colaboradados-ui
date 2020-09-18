<template>
  <Base>
    <h1>{{ frontmatter.title }}</h1>
    <vue-good-table :columns="TABLE_HEADERS" :rows="this.rows" />
  </Base>
</template>

<script>
import { csvParse, csvParseRows, csvFormatBody } from "d3-dsv";
import { VueGoodTable } from "vue-good-table";

import TABLE_HEADERS from "@constants/tableHeaders";
import API from "@utils/api";

export default {
  components: {
    VueGoodTable,
  },
  data: function() {
    return {
      csvData: "",
      TABLE_HEADERS,
    };
  },
  computed: {
    columns() {
      return Object.values(this.TABLE_HEADERS).reduce((acc, curr, index) => {
        if (!curr) return;
        return { ...acc, [`${curr.field}`]: curr.label };
      }, {});
    },
    frontmatter() {
      return this.$page.frontmatter;
    },
    rows() {
      return csvParse(this.csvData, this.formatParser);
    },
  },
  async created() {
    this.isLoading = true;
    this.csvData = await API.fetchDatabases();
    console.log(this.csvData);
  },
  methods: {
    formatParser(item) {
      const obj = {
        title: item[this.columns.title],
        link: item[this.columns.link],
        scope: item[this.columns.scope],
        location: "",
        category: item[this.columns.category],
      };
      return obj;
    },
  },
};
</script>

<style lang="scss" module>
// @import "../styles/layouts/Database";
</style>

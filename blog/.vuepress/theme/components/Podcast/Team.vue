<template>
  <section v-if="editors || hosts">
    <h3>Equipe Coluna7</h3>
    <div v-if="editors">
      <PeopleSection title="Edição" :people="editors"></PeopleSection>
    </div>
    <div v-if="hosts">
      <PeopleSection title="Apresentação" :people="hosts"></PeopleSection>
    </div>
  </section>
</template>

<script>
import PeopleSection from "./PeopleSection";
import { METADATA, PEOPLE } from "@helpers/constants";

export default {
  name: "Team",
  components: {
    PeopleSection,
  },
  props: ["data"],
  methods: {
    getMetaContent(key) {
      const value = this.data.meta?.filter((item) => item.name === key);
      return value.length > 0 ? value[0].content : null;
    },
  },
  computed: {
    editors() {
      return this.getMetaContent(METADATA.EDITORS);
    },
    hosts() {
      return this.getMetaContent(METADATA.HOSTS);
    },
  },
};
</script>

<style></style>

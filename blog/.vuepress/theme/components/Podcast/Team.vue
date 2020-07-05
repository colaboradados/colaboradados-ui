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
import { getMetaContent } from "@helpers/get";
import { METADATA, PEOPLE } from "@helpers/constants";

export default {
  name: "Team",
  components: {
    PeopleSection,
  },
  props: ["data"],
  computed: {
    editors() {
      return this.getMetaContent(METADATA.EDITORS, this.data);
    },
    hosts() {
      return this.getMetaContent(METADATA.HOSTS, this.data);
    },
  },
};
</script>

<style></style>

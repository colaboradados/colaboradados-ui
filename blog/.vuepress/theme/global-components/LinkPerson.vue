<template>
  <Link :url="getPerson(person)[platform].url">
    <FaIcon :icon="['fab', platform.icon]"></FaIcon>
    {{ getPerson(person).name }}
  </Link>
</template>

<script>
import { PEOPLE, PLATFORMS } from "@helpers/constants";

export default {
  name: "LinkPerson",
  props: ["person", "platform"],
  data: function() {
    return {
      PLATFORMS,
    };
  },
  methods: {
    getPerson(slug) {
      return PEOPLE[slug];
    },
  },
};
</script>

<style></style>

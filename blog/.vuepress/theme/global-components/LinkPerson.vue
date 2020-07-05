<template>
  <Link :url="getPerson(person)[platform].url">
    <FaIcon :icon="getIcon(platform)"></FaIcon>
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
    getIcon(platform) {
      return ["fab", platform.icon];
    },
  },
};
</script>

<style></style>

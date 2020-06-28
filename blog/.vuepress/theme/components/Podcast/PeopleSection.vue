<template>
  <div v-if="people">
    <h4>{{ title }}</h4>
    <ul>
      <li v-for="(person, i) in people" :key="`person-${i}`">
        <Link
          :platform="PLATFORMS.TWITTER"
          :url="getPerson(person)[PLATFORMS.TWITTER]"
        >
          {{ getPerson(person).name }}
        </Link>
      </li>
    </ul>
  </div>
</template>

<script>
import { PEOPLE, PLATFORMS } from "@helpers/constants";

export default {
  name: "PeopleSection",
  props: ["people", "title"],
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

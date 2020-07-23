<template>
  <div v-if="people">
    <label class="title">{{ title }}</label>
    <ul class="no-list people-list">
      <li
        class="people-item"
        v-for="(person, i) in people"
        :key="`person-${i}`"
      >
        <LinkPerson :person="person" :platform="PLATFORMS.TWITTER"></LinkPerson>
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
};
</script>

<style lang="scss" scoped>
.title {
  font-weight: 600;
}

.people-list {
  margin: 2rem 0 3rem;
}

.people-item {
  margin: 0.75rem 0;
}
</style>

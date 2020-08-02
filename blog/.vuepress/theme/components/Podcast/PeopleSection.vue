<template>
  <div v-if="people">
    <label :class="$style.title">{{ title }}</label>
    <ul :class="[$style.people, 'list--reset']">
      <li
        :class="$style.person"
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

<style lang="scss" module>
.title {
  font-weight: 600;
}

.people {
  margin: 2rem 0 3rem;
}

.person {
  margin: 0.75rem 0;
}
</style>

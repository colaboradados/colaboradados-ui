<template>
  <Base>
    <h1>{{ frontmatter.title }}</h1>
    <Content />
    <ul :class="['list--reset', $style.list]">
      <li :class="$style.teamMember" v-for="person in team" :key="person.name">
        <img :class="$style.image" :src="getImageUrl(person.name)" />
        <p :class="['h3', $style.name]">{{ person.name }}</p>
        <p>{{ person.bio }}</p>
      </li>
    </ul>
  </Base>
</template>

<script>
import { METADATA, PEOPLE } from "@constants/constants";
import { getMetaContent } from "@helpers/get";
import kebabCase from "lodash/kebabCase";

export default {
  name: "About",
  computed: {
    frontmatter() {
      return this.$page.frontmatter;
    },
  },
  methods: {
    getImageUrl(name) {
      return `images/team/${kebabCase(name)}.png`;
    },
  },
  computed: {
    frontmatter() {
      return this.$page.frontmatter;
    },
    team() {
      const names = getMetaContent("name", this.frontmatter);
      const bios = getMetaContent("bio", this.frontmatter);
      return names.map((name, i) => {
        return {
          name,
          bio: bios[i],
        };
      });
    },
  },
};
</script>

<style lang="scss" module>
@import "../styles/layouts/About";
</style>

<template>
  <div id="global-layout">
    <header>
      <h1>Coluna 7 | {{ frontmatter.title }}</h1>
    </header>
    <!-- <component :is="layout" /> -->
    <!-- <Content /> -->
    <h3>Equipe Coluna7</h3>
    <h4>Edição</h4>
    <ul>
      <li v-for="(person, i) in editors" :key="person">
        <Link platform="TWITTER" :url="getPerson(person).twitter">
          {{ getPerson(person).name }}
        </Link>
      </li>
    </ul>
    <h4>Apresentação</h4>
    <ul>
      <li v-for="(person, i) in hosts" :key="person">
        <Link platform="TWITTER" :url="getPerson(person).twitter">
          {{ getPerson(person).name }}
        </Link>
      </li>
    </ul>
    <footer><h1>Footer</h1></footer>
  </div>
</template>

<script>
import Link from "../../components/Link";
import { METADATA, PEOPLE } from "../../helpers/constants";
export default {
  methods: {
    getPerson(slug) {
      console.log(slug);
      return PEOPLE[slug];
    },
  },
  computed: {
    frontmatter() {
      return this.$page.frontmatter;
    },
    hosts() {
      return this.$page?.frontmatter?.meta?.filter(
        (item) => item.name === METADATA.HOSTS
      )[0].content;
    },
    editors() {
      return this.$page?.frontmatter?.meta?.filter(
        (item) => item.name === METADATA.EDITORS
      )[0].content;
    },
  },
};
</script>

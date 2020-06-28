<template>
  <div id="global-layout">
    <header>
      <h1>Coluna 7 | {{ frontmatter.title }}</h1>
    </header>
    <Content />
    <h3>Participantes desta edição</h3>
    <ul v-if="participants">
      <li v-for="(person, i) in participants" :key="`participant-${i}`">
        <Link platform="TWITTER" :url="getPerson(person).twitter">
          {{ getPerson(person).name }}
        </Link>
      </li>
    </ul>
    <section v-if="editors || hosts">
    <h3>Equipe Coluna7</h3>
      <div v-if="editors">
    <h4>Edição</h4>
    <ul>
          <li v-for="(person, i) in editors" :key="`editor-${i}`">
        <Link platform="TWITTER" :url="getPerson(person).twitter">
          {{ getPerson(person).name }}
        </Link>
      </li>
    </ul>
      </div>
      <div v-if="hosts">
    <h4>Apresentação</h4>
    <ul>
          <li v-for="(person, i) in hosts" :key="`host-${i}`">
        <Link platform="TWITTER" :url="getPerson(person).twitter">
          {{ getPerson(person).name }}
        </Link>
      </li>
    </ul>
  </div>
    </section>
  </div>
</template>

<script>
import Link from "../../components/Link";
import { METADATA, PEOPLE } from "../../helpers/constants";
export default {
  data: function() {
    return {
      METADATA,
    };
  },
  methods: {
    getPerson(slug) {
      console.log(slug);
      return PEOPLE[slug];
    },
    getItem(key) {
      const value = this.frontmatter.meta?.filter((item) => item.name === key);
      return value.length > 0 ? value[0].content : null;
  },
  },
  computed: {
    editors() {
      return this.getItem(METADATA.EDITORS);
    },
    frontmatter() {
      return this.$page.frontmatter;
    },
    hosts() {
      return this.getItem(METADATA.HOSTS);
    },
    participants() {
      return this.getItem(METADATA.PARTICIPANTS);
    },
  },
};
</script>

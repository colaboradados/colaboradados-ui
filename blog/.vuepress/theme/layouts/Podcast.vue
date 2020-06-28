<template>
  <div id="global-layout">
    <header>
      <p>Coluna 7 | {{ frontmatter.title }}</p>
      <time :datetime="frontmatter.date">{{ date }}</time>
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
import moment from "moment";
import Link from "../../components/Link";
import { formatArtcileTimestap } from "../../helpers/formatters";
import { METADATA, PEOPLE } from "../../helpers/constants";

export default {
  data: function() {
    return {
      METADATA,
    };
  },
  methods: {
    getPerson(slug) {
      return PEOPLE[slug];
    },
    getItem(key) {
      const value = this.frontmatter.meta?.filter((item) => item.name === key);
      return value.length > 0 ? value[0].content : null;
    },
  },
  computed: {
    date() {
      return moment(this.frontmatter.date).format(formatArtcileTimestap);
    },
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

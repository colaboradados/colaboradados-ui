<template>
  <div id="global-layout">
    <header>
      <p>Coluna 7 | {{ frontmatter.title }}</p>

      <time :datetime="frontmatter.date">{{ date }}</time>
    </header>
    <Content />
    <section>
      <h3>Escute agora!</h3>
      <iframe
        :src="getMetaContent(METADATA.ANCHORFM)"
        height="102px"
        frameborder="0"
        scrolling="no"
        :title="`Escute o episódio ${edition}`"
        width="400px"
      ></iframe>
      <p>
        Ou então
        <Link :url="PLATFORMS.ANCHORFM.rss">assine o feed RSS</Link>
        no seu aplicativo preferido!
      </p>
    </section>
    <section v-if="participants">
      <h3>Participantes desta edição</h3>
      <ul>
        <li v-for="(person, i) in participants" :key="`participant-${i}`">
          <Link platform="TWITTER" :url="getPerson(person).twitter">
            {{ getPerson(person).name }}
          </Link>
        </li>
      </ul>
    </section>
    <section v-if="editors || hosts">
      <h3>Equipe Coluna7</h3>
      <div v-if="editors">
        <h4>Edição</h4>
        <ul>
          <li v-for="(person, i) in editors" :key="`editor-${i}`">
            <Link
              :platform="PLATFORMS.TWITTER"
              :url="getPerson(person)[PLATFORMS.TWITTER]"
            >
              {{ getPerson(person).name }}
            </Link>
          </li>
        </ul>
      </div>
      <div v-if="hosts">
        <h4>Apresentação</h4>
        <ul>
          <li v-for="(person, i) in hosts" :key="`host-${i}`">
            <Link
              :platform="PLATFORMS.TWITTER"
              :url="getPerson(person)[PLATFORMS.TWITTER]"
            >
              {{ getPerson(person).name }}
            </Link>
          </li>
        </ul>
      </div>
    </section>
    <SocialNetwork></SocialNetwork>
  </div>
</template>

<script>
import moment from "moment";
import Link from "../../components/Link";
import SocialNetwork from "../../components/SocialNetwork";
import { formatArtcileTimestap, numberPattern } from "../../helpers/patterns";
import { METADATA, PEOPLE, PLATFORMS } from "../../helpers/constants";

export default {
  data: function() {
    return {
      METADATA,
      PLATFORMS,
    };
  },
  methods: {
    getMetaContent(key) {
      const value = this.frontmatter.meta?.filter((item) => item.name === key);
      return value.length > 0 ? value[0].content : null;
    },
    getPerson(slug) {
      return PEOPLE[slug];
    },
  },
  computed: {
    edition() {
      return parseInt(this.frontmatter.permalink.match(numberPattern)[0], 10);
    },
    date() {
      return moment(this.frontmatter.date).format(formatArtcileTimestap);
    },
    editors() {
      return this.getMetaContent(METADATA.EDITORS);
    },
    frontmatter() {
      return this.$page.frontmatter;
    },
    hosts() {
      return this.getMetaContent(METADATA.HOSTS);
    },
    participants() {
      return this.getMetaContent(METADATA.PARTICIPANTS);
    },
  },
};
</script>

<template>
  <div id="global-layout">
    <ProductHeader product="Coluna 7" :data="frontmatter"></ProductHeader>
    <Content />
    <Listen :data="frontmatter"></Listen>
    <section v-if="participants">
      <PeopleSection
        title="Participantes desta edição"
        :people="participants"
      ></PeopleSection>
    </section>
    <Team :data="frontmatter"></Team>
    <SocialNetwork></SocialNetwork>
  </div>
</template>

<script>
import moment from "moment";
import Listen from "@components/Podcast/Listen";
import PeopleSection from "@components/Podcast/PeopleSection";
import Team from "@components/Podcast/Team";
import { formatArtcileTimestap } from "@helpers/patterns";
import { METADATA, PEOPLE } from "@helpers/constants";
import { getMetaContent } from "@helpers/get";

export default {
  components: {
    Listen,
    PeopleSection,
    Team,
  },
  data: function() {
    return {
      METADATA,
    };
  },
  computed: {
    date() {
      return moment(this.frontmatter.date).format(formatArtcileTimestap);
    },
    frontmatter() {
      return this.$page.frontmatter;
    },
    participants() {
      return getMetaContent(METADATA.PARTICIPANTS, this.frontmatter);
    },
  },
};
</script>

<template>
  <div>
    <Header />
    <main class="main" id="global-layout">
      <section class="header grid">
        <ProductHeader
          class="grid-left"
          product="Coluna 7"
          :data="frontmatter"
        ></ProductHeader>
        <div class="grid-right">
          <h2 class="h2">{{ frontmatter.title }}</h2>
        </div>
      </section>
      <section class="grid">
        <div class="grid-left">
          <PeopleSection
            v-if="participants"
            title="Participantes desta edição"
            :people="participants"
          ></PeopleSection>
          <PeopleSection
            v-if="hosts"
            title="Apresentação"
            :people="hosts"
          ></PeopleSection>
          <PeopleSection
            v-if="editors"
            title="Edição"
            :people="editors"
          ></PeopleSection>
        </div>
        <div class="grid-right">
          <Content />
          <Listen :data="frontmatter"></Listen>
        </div>
      </section>
      <!-- <section>
      <h3>Créditos</h3>
      <slot name="aaa" />

      <Content slot-key="aaa" />
    </section> -->
      <!-- <SocialNetwork></SocialNetwork> -->
    </main>
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
    editors() {
      return getMetaContent(METADATA.EDITORS, this.frontmatter);
    },
    hosts() {
      return getMetaContent(METADATA.HOSTS, this.frontmatter);
    },
    participants() {
      return getMetaContent(METADATA.PARTICIPANTS, this.frontmatter);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/tools";

.main {
  margin: 3rem auto 0;
  max-width: 120rem;
  overflow: hidden;
  padding: 0 var(--pad-horizontal);
  width: 100%;
}

.grid {
  @include grid;

  &-left {
    @include grid-column-span(4);

    @include sm-only {
      margin-bottom: 5rem;
    }

    @include md {
      @include grid-column-span(3);
    }

    @include lg {
      @include grid-column-span(4);
    }
  }

  &-right {
    @include grid-column-span(4);

    @include md {
      grid-column-start: 4;
      @include grid-column-span(6);
    }

    @include lg {
      grid-column-start: 5;
      @include grid-column-span(8);
    }
  }
}

.header {
  margin-bottom: 3rem;
}
</style>

<template>
  <Base>
    <div class="grid">
      <ProductHeader
        class="product-header"
        :data="frontmatter"
        product="Coluna 7"
      ></ProductHeader>
      <main class="content">
        <h1 class="podcast-title">{{ frontmatter.title }}</h1>
        <Content />
      </main>
      <aside>
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
      </aside>
    </div>
  </Base>
</template>

<script>
import moment from "moment";
import PeopleSection from "@components/Podcast/PeopleSection";
import { formatArtcileTimestap } from "@helpers/patterns";
import { METADATA, PEOPLE } from "@helpers/constants";
import { getMetaContent } from "@helpers/get";

export default {
  name: "Podcast",
  components: {
    PeopleSection,
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

.grid {
  @include grid;
  grid-template-rows: auto auto;

  aside {
    @include grid-column-span(4);

    @include md {
      @include grid-column-span(3);
      grid-row-start: 2;
    }

    @include lg {
      @include grid-column-span(4);
    }
  }

  .content {
    @include grid-column-span(4);

    @include md {
      @include grid-column-span(6);
      grid-column-start: 4;
      grid-row-start: 2;
    }

    @include lg {
      @include grid-column-span(8);
      grid-column-start: 5;
    }
  }
}

.header {
  margin-bottom: 3rem;
}

.product-header {
  margin-bottom: 3rem;

  @include md {
    @include grid-column-span(6);
    grid-column-start: 4;
    grid-row-start: 1;
  }

  @include md {
    @include grid-column-span(8);
    grid-column-start: 5;
  }
}
</style>

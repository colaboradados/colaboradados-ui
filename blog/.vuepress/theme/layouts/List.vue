<template>
  <Base>
    <h1 class="podcast-title">{{ frontmatter.title }}</h1>
    <ul :class="['list--reset', $style.grid]">
      <li v-for="n in count">
        <Link
          :aria-label="`Episódio ${n}`"
          :url="`/podcast/${n.toString().padStart(3, '0')}`"
        >
          <img
            :src="`/podcast/${n.toString().padStart(3, '0')}.png`"
            aria-hidden
          />
        </Link>
      </li>
    </ul>
  </Base>
</template>

<script>
import { getMetaContent } from "@helpers/get";

export default {
  computed: {
    frontmatter() {
      return this.$page.frontmatter;
    },
    count() {
      return getMetaContent("count", this.frontmatter);
    },
  },
  mounted() {
    console.log(this.frontmatter);
  },
};
</script>

<style lang="scss" module>
@import "../styles/tools";

.grid {
  @include grid(4);
}
</style>

<template>
  <Base>
    <section>
      <h1>{{ frontmatter.title }}</h1>
    </section>
    <section>
      <ul v-if="newsletters" :class="['list--reset', $style.grid]">
        <li v-for="(item, index) in newsletters">
          <Link :aria-label="`Edição ${index}`" :url="item.link">
            <img :src="`/newsletter/${item.edition}.jpg`" aria-hidden />
          </Link>
        </li>
      </ul>
    </section>
  </Base>
</template>

<script>
import { getMetaContent } from "@helpers/get";

export default {
  name: "Newsletter",
  computed: {
    frontmatter() {
      return this.$page.frontmatter;
    },
    newsletters() {
      return this.frontmatter.meta.newsletters;
    },
  },
  mounted() {
    console.log(this.frontmatter);
  },
};
</script>

<style lang="scss" module>
@import "../styles/layouts/Newsletter";
</style>

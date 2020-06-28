<template>
  <section>
    <h3>Não se esqueçam de nos acompanhar nas redes sociais</h3>
    <ul>
      <li v-for="(social, i) in SOCIAL_LINKS" :key="`social-${i}`">
        <Link :url="social.url">
          <fa-icon :icon="getIcon(social.platform)"></fa-icon>
          <p>{{ social.handle }}</p>
        </Link>
      </li>
    </ul>
  </section>
</template>

<script>
import { SOCIAL_LINKS } from "@helpers/constants";

export default {
  name: "SocialNetwork",
  data: function() {
    return {
      SOCIAL_LINKS,
    };
  },
  methods: {
    getIcon(platform) {
      return ["fab", platform.icon];
    },
  },
};
</script>

<style></style>

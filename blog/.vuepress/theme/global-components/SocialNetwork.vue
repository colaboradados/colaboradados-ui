<template>
  <section class="social">
    <h3>Não se esqueçam de nos acompanhar nas redes sociais</h3>
    <ul class="list list--horizontal">
      <li
        class="social-item"
        v-for="(social, i) in SOCIAL_LINKS"
        :key="`social-${i}`"
      >
        <Link
          :url="social.url"
          :title="`${social.title} no ${social.platform}`"
        >
          <FaIcon :icon="getIcon(social.platform)"></FaIcon>
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

<style lang="scss" scoped>
.social {
  text-align: center;
  width: 100%;
}

.list {
  list-style: none;

  &--horizontal {
    display: flex;
    flex-direction: row;
    gap: 5em;
    justify-content: center;
  }
}

.social-item {
  font-size: 3rem;
}

.social-handle {
  font-size: 0.5em;
  margin: 0;
}
</style>

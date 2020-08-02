<template>
  <ul v-if="networks" class="list--reset list--horizontal">
    <li v-for="(social, i) in networks" :key="`social-${i}`">
      <Link
        :url="social.url"
        :aria-label="`${social.title} no ${social.platform.title}`"
        :title="`${social.title} no ${social.platform}`"
      >
        <FaIcon :icon="['fab', social.platform.icon]"></FaIcon>
      </Link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SocialNetwork",
  props: ["networks"],
};
</script>

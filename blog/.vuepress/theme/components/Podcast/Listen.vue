<template>
  <section class="section">
    <h3 class="h5">Escute agora!</h3>
    <iframe
      allow="encrypted-media"
      allowtransparency="true"
      class="iframe"
      frameborder="0"
      height="232"
      :src="url"
      :title="`Escute o episódio ${edition}`"
      width="100%"
    ></iframe>
    <p>
      Ou então
      <Link :url="PLATFORMS.ANCHORFM.rss">assine o feed RSS</Link>
      no seu aplicativo preferido!
    </p>
  </section>
</template>

<script>
import { METADATA, PLATFORMS } from "@helpers/constants";
import { getMetaContent } from "@helpers/get";
import { numberPattern } from "@helpers/patterns";

export default {
  name: "Listen",
  props: ["data"],
  data: function() {
    return {
      METADATA,
      PLATFORMS,
    };
  },
  computed: {
    edition() {
      return parseInt(this.data.permalink.match(numberPattern)[0], 10);
    },
    url() {
      return getMetaContent(METADATA.EMBED, this.data);
    },
  },
};
</script>

<style lang="scss" scoped>
.iframe {
  margin: 2rem 0;
}
</style>

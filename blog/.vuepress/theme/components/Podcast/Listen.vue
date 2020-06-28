<template>
  <section>
    <h3>Escute agora!</h3>
    <iframe
      :src="url"
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
      return getMetaContent(METADATA.ANCHORFM, this.data);
    },
  },
};
</script>

<style></style>

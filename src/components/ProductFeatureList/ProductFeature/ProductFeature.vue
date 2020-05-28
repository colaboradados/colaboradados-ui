<template>
  <article class="product-feature">
    <TitleChevron :url="url" :title="title"></TitleChevron>
    <img class="feature-image" :alt="imageAlt" :src="getImage" />
    <p class="description">{{ description }}</p>
  </article>
</template>

<script>
import TitleChevron from '@comp/TitleChevron/TitleChevron.vue';

export default {
  name: 'ProductFeature',
  components: {
    TitleChevron
  },
  props: {
    description: {
      type: String,
      default: ''
    },
    imageAlt: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },
  computed: {
    getImage: function() {
      if (!this.imageUrl || this.imageUrl === '') {
        return require('@/assets/podcast/404.png');
      }
      return require(`@/assets/podcast/${this.imageUrl}`);
    }
  }
};
</script>

<style scoped lang="scss">
@import './ProductFeature.styles.scss';
</style>

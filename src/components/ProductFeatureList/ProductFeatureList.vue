<template>
  <div class="product-feature-list">
    <template v-for="(product, index) in productFeatures">
      <ProductFeature
        class="product-feature"
        :description="product.description"
        :imageAlt="product.imageAlt"
        :imageUrl="product.imageUrl"
        :title="product.title"
        :url="product.url"
        :key="`product-feature-${index}`"
      >
      </ProductFeature>
    </template>
  </div>
</template>

<script>
import ProductFeature from './ProductFeature/ProductFeature.vue';

export default {
  name: 'ProductFeatureList',
  components: { ProductFeature },
  props: {
    productFeatures: {
      type: Array,
      default: () => []
    }
  }
  // created: function() {
  //   console.log(this.productFeatures);
  // }
};
</script>

<style scoped lang="scss">
@import './ProductFeatureList.styles.scss';
</style>

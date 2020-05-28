<template>
  <main class="main">
    <section>
      <Quotation :author="data.quotation.author" :title="data.quotation.title" :url="data.quotation.url">
        <p>{{ data.quotation.text }}</p>
      </Quotation>
    </section>
    <section>
      <ProductFeatureList :productFeatures="data.productFeatures"></ProductFeatureList>
    </section>
  </main>
</template>

<script>
import data from '@/data/home';
import ProductFeatureList from '@/components/ProductFeatureList/ProductFeatureList.vue';
import Quotation from '@/components/Quotation/Quotation.vue';

export default {
  name: 'Home',
  components: {
    Quotation,
    ProductFeatureList
  },
  data: () => ({
    data: data
  })
};
</script>

<style scoped lang="scss">
.main {
  // TODO: scss mixin
  margin: auto;
  max-width: var(--max-width);
}

section {
  margin: 15rem 0;
}
</style>

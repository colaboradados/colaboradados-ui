<template>
  <div>
    <h1>Hi</h1>
    {{ getComponents(this.data) }}
  </div>
</template>

<script>
import ProductFeatureList from '@/components/ProductFeatureList/ProductFeatureList.vue';
import Quotation from '@/components/Quotation/Quotation.vue';

const COMPONENTS = {
  ProductFeatureList(data) {
    return <ProductFeatureList {...data}></ProductFeatureList>;
  },
  Quotation(data) {
    return <Quotation {...data}></Quotation>;
  }
};

export default {
  name: 'ParseComponents',
  components: {
    Quotation,
    ProductFeatureList
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
    getComponents: function(data) {
      const items = data.map((entry) => {
        return createElement(entry.component, { ...data });
      });
    }
  }
};
</script>

<style></style>

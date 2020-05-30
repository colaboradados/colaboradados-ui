<template>
  <main class="main">
    <section>
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
    </section>

    <section>
      <Quotation
        author="Open Knowledge Brasil"
        title="Quem trabalha com dados abertos no Brasil?"
        url="https://www.ok.org.br/noticia/quem-trabalha-com-dados-abertos-no-brasil/"
      >
        <p>
          A partir da programação, a Judite fez algumas reportagens bem legais, com um impacto considerável, passeou em
          algumas redações e esse ano lançou o Colaboradados, um projeto que se propõe a auxiliar as pessoas a acharem
          bases de dados confiáveis e gratuitas.
        </p>
      </Quotation>
    </section>
  </main>
</template>

<script>
import ProductFeature from '@/components/ProductFeature/ProductFeature.vue';
import Quotation from '@/components/Quotation/Quotation.vue';

export default {
  name: 'Home',
  components: {
    Quotation,
    ProductFeature
  },
  data: () => ({
    productFeatures: [
      {
        title: 'Newsletter',
        url: '/',
        imageUrl: '',
        imageAlt: '',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer amet, phasellus consequat, scelerisque. Varius lorem pharetra arcu eu sed. Faucibus ac varius nulla tincidunt sed bibendum. Proin gravida viverra massa massa pellentesque pulvinar.'
      },
      {
        title: 'Podcast',
        url: '/',
        imageUrl: 'episodio_014.png',
        imageAlt: 'Lorem ipsum dolor sit ame',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer amet, phasellus consequat, scelerisque. Varius lorem pharetra arcu eu sed. Faucibus ac varius nulla tincidunt sed bibendum. Proin gravida viverra massa massa pellentesque pulvinar.'
      }
    ]
  })
};
</script>

<style scoped lang="scss">
.main {
  // TODO: scss mixin
  margin: auto;
  max-width: var(--max-width);
}

.product-feature-list {
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: 0 5rem;
}

.product-feature {
}
</style>

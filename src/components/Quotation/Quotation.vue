<template>
  <blockquote class="blockquote" :cite="url">
    <p class="title">{{ title }}</p>
    <LinkChevron class="link" url="https://www.ok.org.br/noticia/quem-trabalha-com-dados-abertos-no-brasil/">{{
      author
    }}</LinkChevron>
    <slot></slot>
  </blockquote>
</template>

<script>
import LinkChevron from '@comp/LinkChevron/LinkChevron.vue';

export default {
  name: 'Quotation',
  components: {
    LinkChevron
  },
  props: {
    author: {
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
  }
};
</script>

<style scoped lang="scss">
@import './Quotation.styles.scss';

.blockquote {
  margin: auto;
  max-width: 620px;
}

.title {
  font-family: var(--serif);
  font-weight: var(--bold);
  font-size: 3.6rem;
  line-height: 1.2;
}

.link {
  margin: 1rem 1.5rem;
}
</style>

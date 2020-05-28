<template>
  <main>
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
  </main>
</template>

<script>
import Quotation from '@/components/Quotation/Quotation.vue';

export default {
  name: 'Home',
  components: {
    Quotation
  }
};
</script>

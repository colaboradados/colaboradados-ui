<template>
  <header class="header">
    <div class="header-content">
      <p class="header-title">Colaboradados</p>
      <nav class="nav" v-if="nav">
        <ul class="no-list">
          <li class="nav-link" v-for="(navLink, i) in nav" :key="navLink.link">
            <Link :url="navLink.link">{{ navLink.text }}</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    nav() {
      return this.$themeConfig.nav;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/tools";

.header {
  margin: auto;
  padding: 2rem var(--pad-horizontal);
  width: 100%;
  z-index: 1;

  @include md-and-lower {
    background-color: #fff;
    border-bottom: 0.1rem solid var(--light-grey);
    position: sticky;
    top: 0;
  }

  &-content {
    display: flex;
    margin: auto;
    max-width: 120rem;
    width: 100%;
  }
}

.nav {
  margin-left: auto;

  & > ul {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: var(--col-gutter);
  }
}
</style>

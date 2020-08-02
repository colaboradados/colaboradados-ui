<template>
  <header :class="$style.header">
    <div :class="$style.headerContent">
      <p>Colaboradados</p>
      <nav v-if="nav" :class="$style.nav">
        <ul class="list--reset list--horizontal">
          <li v-for="(navLink, i) in nav" :key="navLink.link">
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

<style lang="scss" module>
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
}

.headerContent {
  display: flex;
  margin: auto;
  max-width: var(--max-width);
  width: 100%;
}

.nav {
  margin-left: auto;
}
</style>

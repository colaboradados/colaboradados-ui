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
@import "../styles/components/Header";
</style>

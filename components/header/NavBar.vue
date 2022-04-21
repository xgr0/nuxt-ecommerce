<template>
  <v-app-bar color="surface" app>
    <nuxt-link to="/" class="mr-10 text-decoration-none">
      <v-toolbar-title class="text-h4 font-weight-bold text--primary">
        Store
      </v-toolbar-title>
    </nuxt-link>
    <menu-component :menu-items="menuItems" class="mr-10" />
    <search-component />
    <v-spacer />
    <cart-header />
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    menuItems: {
      type: Array,
      default: null
    }
  }
}
</script>

<style scoped>
</style>

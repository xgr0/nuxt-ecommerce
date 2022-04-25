<template>
  <v-app light>
    <nav-bar :menu-items="$store.state.categories" />
    <v-main class="mb-10">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <cart-dialog />
    <footer-component :category-links="$store.state.categories" />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

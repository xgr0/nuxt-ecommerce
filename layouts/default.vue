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
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

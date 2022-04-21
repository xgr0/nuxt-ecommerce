<template>
  <v-menu offset-y>
    <template #activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        <v-icon class="mr-2">
          mdi-menu
        </v-icon>
        Menu
      </v-btn>
    </template>
    <v-list light>
      <v-list-item
        v-for="(item, index) in menuItems"
        :key="index"
        link
        :to="categoryUrl(item.slug)"
      >
        {{ item.title }}
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>

export default {
  name: 'MenuComponent',
  props: {
    menuItems: {
      type: Array,
      default: null
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>

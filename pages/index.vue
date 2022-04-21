<template>
  <v-row>
    <v-col v-for="category in categories" :key="category.title" cols="4">
      <v-card>
        <nuxt-link :to="categoryUrl(category.slug)">
          <v-img
            height="220px"
            src="https://image-placeholder.com/images/actual-size/320x320.png"
            class="rounded-b-0"
          />
        </nuxt-link>
        <v-card-title>
          <nuxt-link :to="categoryUrl(category.slug)">
            {{ category.title.toUpperCase() }}
          </nuxt-link>
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// noinspection NpmUsedModulesInstalled
import { mapState } from 'vuex'

export default {
  name: 'IndexPage',
  async asyncData ({ store }) {
    await store.dispatch('getCategories')
  },
  computed: {
    ...mapState({
      categories: 'categories'
    })
  },
  methods: {
  }
}
</script>

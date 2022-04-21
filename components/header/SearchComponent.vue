<template>
  <v-autocomplete
    v-model="select"
    :loading="loading"
    :items="items"
    item-text="title"
    :search-input.sync="search"
    menu-props="closeOnContentClick"
    cache-items
    class="mx-4"
    flat
    hide-no-data
    hide-details
    label="Search..."
    solo
  >
    <template #item="{ item:item}">
      <v-list-item :to="productUrl(item.id)">
        {{ item.title }}
      </v-list-item>
    </template>
  </v-autocomplete>
</template>

<script>
import helper from '@/utils/helper'

export default {
  name: 'SearchComponent',
  data () {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [
      ]
    }
  },
  watch: {
    search (val) {
      val && val !== this.select && this.initSearch(val)
    }
  },
  methods: {
    async initSearch (value) {
      // Handle empty value
      if (!value) {
        this.items = []
      }
      // Items have already been requested
      if (this.loading) {
        return
      }

      this.loading = true

      await setTimeout(async () => {
        try {
          const response = await helper.getProductSearch(value)
          this.items = response.products
        } catch (e) {
        }
        this.loading = false
      }, 300)
    }
  }
}
</script>

<style scoped>

</style>

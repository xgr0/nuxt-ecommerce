<template>
  <div>
    <breadcrumbs />
    <h1 class="text--h1 text-uppercase mb-10">
      {{ category.title }}
    </h1>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="4">
        <v-card class="pb-4 mb-4" @click="openProduct(product)">
          <v-img height="200px" :src="product.thumbnail" />
          <v-card-title>
            <nuxt-link :to="productUrl(product.id)">
              {{ product.title }}
            </nuxt-link>
          </v-card-title>

          <v-row class="px-4">
            <v-col class="product-price">
              $ {{ product.price }}
            </v-col>
            <v-col>
              <v-rating
                :value="product.rating"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
                class="float-right"
              />
            </v-col>
          </v-row>
          <v-card-text>
            <div class="product-description">
              {{ product.description }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import helper from '@/utils/helper'

export default {
  validate () {
    // return /^\d+$/.test(params.id)
    return true
  },
  async asyncData ({ params, store }) {
    await store.dispatch('getCategory', params.slug)

    const category = store.state.currentCategory
    const crumbs = [
      {
        text: category.title,
        to: helper.urls.categoryUrl(category.slug)
      }
    ]
    await store.dispatch('breadcrumbs/setBreadCrumbs', crumbs)
  },
  head () {
    return {
      title: this.category.title.toUpperCase()
    }
  },
  computed: {
    ...mapState({
      category: 'currentCategory',
      products: 'categoryProducts'
    })
  },
  methods: {
    ...mapActions({
      getCategory: 'getCategory'
    }),
    openProduct (product) {
      this.$router.push(this.productUrl(product.id))
    }
  }
}
</script>

<style scoped>
.product-price {
  font-weight: bold;
}
.product-description {
  height: 60px;
}
</style>

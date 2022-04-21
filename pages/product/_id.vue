<template>
  <div>
    <breadcrumbs />
    <v-row class="mb-10">
      <v-col>
        <img :src="product.thumbnail" :alt="product.title">
      </v-col>
      <v-col>
        <h1 class="text--h1 mb-4">
          {{ product.title }}
        </h1>
        <v-rating
          :value="product.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
          class="mb-4"
        />
        <div class="mb-4">
          <small class="blue-grey--text">
            Brand:
          </small>
          {{ product.brand }}
        </div>
        <h3 v-if="product.price" class="mb-4">
          Price: $ {{ product.price }}
        </h3>
        <add-to-cart-button :product="product" />
      </v-col>
    </v-row>
    <div>
      <h3 class="text--h3">
        Description
      </h3>
      <div>
        {{ product.description }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddToCartButton from '@/components/AddToCartButton'
import helper from '@/utils/helper'

export default {
  components: { AddToCartButton },
  async asyncData ({ params, store }) {
    await store.dispatch('getProduct', params.id)
    const product = store.state.currentProduct
    await store.dispatch('getCategory', product.category)

    const category = store.state.currentCategory
    const crumbs = [
      {
        text: category.title,
        to: helper.urls.categoryUrl(category.slug)
      },
      {
        text: product.title,
        to: helper.urls.productUrl(product.id)
      }
    ]
    await store.dispatch('breadcrumbs/setBreadCrumbs', crumbs)
  },
  head () {
    return {
      title: this.product.title.toUpperCase()
    }
  },
  computed: {
    ...mapState({
      product: 'currentProduct'
    })
  },
  methods: {
  }
}
</script>

<style scoped>

</style>

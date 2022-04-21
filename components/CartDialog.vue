<template>
  <v-dialog
    v-model="isCartDialogShown"
    width="800"
    @click:outside="changeCartDialogState(false)"
  >
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Your cart
      </v-card-title>
      <v-list v-if="products.length > 0" class="transparent">
        <div v-for="(product, index) in products" :key="product.id">
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="product.thumbnail" />
            </v-list-item-avatar>
            <v-list-item-title class="cursor-pointer" @click="redirectTo(productUrl(product.id))">
              {{ product.title }}
            </v-list-item-title>
            <v-list-item-title>
              $ {{ product.price }}
            </v-list-item-title>
            <v-text-field
              v-model.number="product.quantity"
              append-outer-icon="mdi-plus"
              prepend-icon="mdi-minus"
              class="mr-2"
              @click:append-outer="increment(product)"
              @click:prepend="decrement(product)"
            />
            <v-list-item-action>
              <v-btn icon class="mb-2" @click="remove(product)">
                <v-icon color="red lighten-3">
                  mdi-close
                </v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-divider
            v-if="index < products.length - 1"
            :key="index"
          />
        </div>
      </v-list>
      <h2 v-else class="grey--text pa-6 ">
        Your cart is empty
      </h2>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn
          :disabled="products.length <= 0"
          color="primary"
          @click="redirectTo('/checkout')"
        >
          Check out
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import helper from '@/utils/helper'

export default {
  name: 'CartDialog',
  data () {
    return {
      products: []
    }
  },
  computed: {
    ...mapState('cart',
      {
        cartProducts: 'products',
        isCartDialogShown: 'isCartDialogShown'
      }
    )
  },
  watch: {
    cartProducts: {
      handler (val, oldVal) {
        this.getProductsData()
      },
      deep: true
    }
  },
  async mounted () {
    await this.getProductsData()
  },
  methods: {
    ...mapActions('cart', {
      changeCartDialogState: 'changeCartDialogState',
      increment: 'incrementProductQuantity',
      decrement: 'decrementProductQuantity',
      remove: 'removeProductFromCart'
    }),
    async getProductsData () {
      const products = []
      for (const idx in this.cartProducts) {
        const pData = await helper.getProduct(this.cartProducts[idx].id)
        pData.quantity = this.cartProducts[idx].quantity
        products.push(pData)
      }
      this.products = products
    },
    redirectTo (url) {
      this.changeCartDialogState(false)
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>

</style>

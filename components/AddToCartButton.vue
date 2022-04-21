<template>
  <v-btn
    v-if="isProductInCart(product)"
    depressed
    class="px-6"
    @click="changeCartDialogState(true)"
  >
    In cart
  </v-btn>
  <v-btn
    v-else
    color="primary"
    @click="addToCart(product)"
  >
    Buy
  </v-btn>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'AddToCartButton',
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  computed: {
    ...mapState('cart', {
      productsInCart: 'products'
    })
  },
  mounted () {
    this.isProductInCart(this.product)
  },
  methods: {
    ...mapActions('cart', {
      addProduct: 'addProduct',
      changeCartDialogState: 'changeCartDialogState'
    }),
    addToCart (product) {
      this.addProduct({ product, quantity: 1 })
      this.isProductInCart(this.product)
    },
    isProductInCart (product) {
      return !!this.productsInCart.find(value => value.id === product.id)
    }
  }
}
</script>

<style scoped>

</style>

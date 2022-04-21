<template>
  <client-only>
    <v-btn
      icon
      style="position: relative"
      class="pr-5"
      @click="changeCartDialogState(true)"
    >
      <v-icon size="26">
        mdi-cart-outline
      </v-icon>
      <div
        v-if="products.length > 0"
        class="primary white--text rounded-circle cart-counter"
      >
        {{ products.length }}
      </div>
    </v-btn>
  </client-only>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'CartHeader',
  computed: {
    ...mapState('cart', [
      'products',
      'isCartDialogShown'
    ])
  },
  methods: {
    ...mapActions('cart', {
      changeCartDialogState: 'changeCartDialogState'
    })
  }
}
</script>

<style scoped>
.cart-counter {
  margin-top: -20px;
  margin-left: 20px;
  padding: 3px;
  width: 18px;
  height: 18px;
  position: absolute;
  font-size: 10px;
}
</style>

export const state = () => ({
  products: [],
  isCartDialogShown: false
})

export const mutations = {
  ADD_PRODUCT (state, productData) {
    state.products.push(productData)
  },
  REMOVE_PRODUCT (state, id) {
    state.products = state.products.filter(value => value.id !== id)
  },
  CART_DIALOG_CHANGE (state, value) {
    state.isCartDialogShown = value
  },
  ADD_QUANTITY (state, { id, amount }) {
    const product = state.products.find(value => value.id === id)
    if (product) {
      product.quantity += amount
      if (product.quantity <= 1) {
        product.quantity = 1
      }
    } else {
      throw new Error('Product is not in the cart')
    }
  }
}

export const actions = {
  addProduct ({ commit }, { product, quantity }) {
    const pData = {
      id: product.id,
      quantity
    }
    commit('ADD_PRODUCT', pData)
  },
  removeProductFromCart ({ commit }, product) {
    commit('REMOVE_PRODUCT', product.id)
  },
  incrementProductQuantity ({ commit }, product) {
    commit('ADD_QUANTITY', {
      id: product.id,
      amount: 1
    })
  },
  decrementProductQuantity ({ commit }, product) {
    commit('ADD_QUANTITY', {
      id: product.id,
      amount: -1
    })
  },
  changeProductQuantity ({ commit }, product) {
    commit('UPDATE_OR_ADD_PRODUCT', {
      id: product.id,
      quantity: product.quantity
    })
  },
  changeCartDialogState ({ commit }, value) {
    commit('CART_DIALOG_CHANGE', value)
  }
}

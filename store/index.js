import helper from '@/utils/helper'

export const state = () => ({
  categories: [],
  currentCategory: {},
  categoryProducts: [],
  currentProduct: {}
})

export const mutations = {
  SET_CATEGORIES (state, categories) {
    state.categories = categories
  },

  SET_CURRENT_CATEGORY (state, category) {
    state.currentCategory = category
  },

  SET_CATEGORY_PRODUCTS (state, products) {
    state.categoryProducts = products
  },

  SET_CURRENT_PRODUCT (state, product) {
    state.currentProduct = product
  }
}

export const actions = {
  async getCategories ({ commit }) {
    try {
      const data = await helper.getCategories()

      const categories = []
      for (const c in data) {
        categories.push({
          title: data[c],
          slug: data[c],
          image: 'https://image-placeholder.com/images/actual-size/320x320.png'
        })
      }
      /* response.forEach((val) => {

      }) */
      commit('SET_CATEGORIES', categories)
    } catch (e) {
    }
  },
  // eslint-disable-next-line require-await
  async getCategory ({ commit }, slug) {
    if (!slug) {
      return
    }
    // const currentCategory = await this.$axios.get('')
    const category = {
      title: slug,
      slug,
      image: 'https://image-placeholder.com/images/actual-size/320x320.png'
    }
    commit('SET_CURRENT_CATEGORY', category)
    const products = await helper.getCategoryProducts(slug)
    commit('SET_CATEGORY_PRODUCTS', products.products)
  },
  async getProduct ({ commit }, id) {
    const data = await helper.getProduct(id)
    commit('SET_CURRENT_PRODUCT', data)
  }
}

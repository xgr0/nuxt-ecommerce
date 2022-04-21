import api from '@/utils/api'

export default {
  urls: {
    productUrl: id => `/product/${id}`,
    categoryUrl: slug => `/category/${slug}`
  },
  getCategories: async () => (await api.get('/products/categories')).data,
  getCategory: async slug => (await api.get(`/category/${slug}`)).data,
  getProduct: async id => (await api.get(`/products/${id}`)).data,
  getCategoryProducts: async categorySlug => (await api.get(`/products/category/${categorySlug}`)).data,
  getProductSearch: async value => (await api.get(`/products/search?q=${value}`)).data,
  postOrder: async formData => await api.post('/orders/add', formData)
}

/**
 * We do this to achieve server side rendering for
 * content displayed by layouts components
 * ( layouts does not have an asyncData() method )
 */
import helper from '@/utils/helper'

const _loadCategories = async (store) => {
  const data = await helper.getCategories()
  const categories = []
  for (const c in data) {
    categories.push({
      title: data[c],
      slug: data[c]
      // image: 'https://image-placeholder.com/images/actual-size/320x320.png'
    })
  }

  store.commit('SET_CATEGORIES', categories)
}

export default async function ({ store }) {
  await _loadCategories(store)
}

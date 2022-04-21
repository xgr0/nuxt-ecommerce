export const state = () => ({
  breadcrumbs: []
})

export const mutations = {
  SET_BREADCRUMBS (state, crumbs) {
    state.breadcrumbs = crumbs
  }
}

export const actions = {
  setBreadCrumbs ({ commit }, crumbs) {
    if (crumbs.length > 0) {
      crumbs = [
        {
          text: 'Home',
          to: '/'
        },
        ...crumbs
      ]
    }

    commit('SET_BREADCRUMBS', crumbs)
  }
}

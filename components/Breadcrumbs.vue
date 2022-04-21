<template>
  <v-row class="mb-10">
    <v-breadcrumbs :items="breadcrumbs" class="" />
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Breadcrumbs',
  computed: {
    ...mapState('breadcrumbs', [
      'breadcrumbs'
    ])
  }
}
</script>

<style scoped>

</style>

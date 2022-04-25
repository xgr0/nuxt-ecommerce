<template>
  <v-footer dark>
    <v-container fluid>
      <v-card
        flat
        width="100%"
        tile
        class="white--text text-center"
      >
        <v-row>
          <v-col cols="4" class="text-left">
            <div class="text-h3">
              StoreLogo
            </div>
          </v-col>
          <v-col cols="8">
            <v-row>
              <v-col v-for="chunk in chunkArray(categoryLinks, 3)" :key="chunk.id" cols="4">
                <v-list dense flat>
                  <v-list-item
                    v-for="item in chunk.list"
                    :key="item.title"
                    :to="categoryUrl(item.slug)"
                    class="text"
                  >
                    {{ item.title.toUpperCase() }}
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-divider />
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <a href="https://github.com/xgr0">Aleksei I.</a>
        </v-card-text>
      </v-card>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: {
    categoryLinks: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      icons: [
        {
          icon: 'mdi-facebook',
          link: ''
        },
        {
          icon: 'mdi-twitter',
          link: ''
        },
        {
          icon: 'mdi-linkedin',
          link: ''
        },
        {
          icon: 'mdi-instagram',
          link: ''
        }
      ]
    }
  },
  methods: {
    chunkArray (array, size) {
      const result = []
      for (let i = 0; i < array.length; i += size) {
        const chunk = {
          id: i,
          list: array.slice(i, i + size)
        }
        result.push(chunk)
      }
      return result
    }
  }
}
</script>

<style scoped>

</style>

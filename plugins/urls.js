import Vue from 'vue'
import helper from '@/utils/helper'

const mixin = {
  data () {
    return helper.urls
  }
}

Vue.mixin(mixin)

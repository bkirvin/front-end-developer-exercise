import Vue from 'vue'
import Vuex from 'vuex'

import pricing from './pricing/index'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      pricing
    },
    strict: process.env.DEV
  })

  return Store
}

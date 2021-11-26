import Vue from 'vue'
import Vuex from 'vuex'

import pricing from './pricing/index'
import settings from './settings/index'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      pricing,
      settings
    },
    strict: process.env.DEV
  })

  return Store
}

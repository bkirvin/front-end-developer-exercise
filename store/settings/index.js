import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import { initState } from './state'

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state: () => initState()
}
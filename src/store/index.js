import Vue from 'vue'
import Vuex from 'vuex'

/* 引入根级别的 state, getters, mutations, action */
import state from '@/store/state'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

/* 引入Vuex模块 */
import demo from '@/store/modules/demo'
import socketDemo from '@/store/modules/socket_io_demo'
import test from '@/store/modules/test/test'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
      demo,
      socketDemo,
      test
    }
  })
}

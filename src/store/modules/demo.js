import * as types from '@/store/mutation-types'

export default{
  namespaced: true,
  state: {
    code: '000000',
    oldcode: '',
    person: {
      name: 'Joker',
      age: 18,
      height: 178
    }
  },
  getters: {
    precode: state => state.oldcode ? state.oldcode : '--------'
  },
  mutations: {

    [types.CHANGE_CODE] (state) {
      state.oldcode = state.code
      state.code = Math.ceil(Math.random() * 100000)
    },

    /**
     * @description
     * @author Pengchuan
     * @date 2018-08-28
     * @param {*} state
     * @param {*} name
     */
    updateName (state, name) {
      state.person.name = name
    }
  },
  actions: {

    /**
     * @description
     * @author Pengchuan
     * @date 2018-08-28
     * @param {*} {commit}
     */
    changeCode ({commit}) {
      commit(types.CHANGE_CODE)
    }
  }
}

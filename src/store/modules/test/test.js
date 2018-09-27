// import * as types from '@/store/mutation-types'
import testA from './testA/testA'
export default{
  namespaced: true,
  modules: {
    testA
  },
  state: {
    count: 1,
    todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => state.todos.filter(todo => todo.done),
    doneTodosCount: (state, getters, rootState, rootGetter) => {
      return getters.doneTodos.length
    },
    /* getter 返回一个函数 */
    getTodoById: (state, getters, rootState, rootGetters) => (id) => {
      // console.log({state})
      // console.log({getters})
      // console.log({rootState})
      // console.log({rootGetters})
      // console.log(rootState.demo.code)
      // console.log(rootState.test.count)
      // console.log(rootGetters['test/doneTodos'])
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    increment (state, payload) {
       /*  变更状态 */
      state.count += payload.amount
    }
  },
  actions: {
    /* Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。 */
    // increment (context) {
    //   context.commit('increment')
    // }

    /* 实践中，我们会经常用到 ES2015 的 参数解构 来简化代码（特别是我们需要调用 commit 很多次的时候）： */
    incrementA ({commit, dispatch, getters, state, rootState, rootGetters}, payload) {
      // console.log({state})
      // console.log({getters})
      // console.log({rootState})
      // console.log({rootGetters})
      // console.log(rootState.demo.code)
      // console.log(rootState.test.count)
      // console.log(rootGetters['demo/precode'])
      commit('increment', payload)
      dispatch('actionB')
      /* 调用其他模块的 action */
      dispatch('demo/changeCode', null, {root: true})
      /* 调用root里的 mutation */
      dispatch('say', null, {root: true})
      /* 调用root里的 action */
      commit('m', null, {root: true})
    },
    actionB () {
      // console.log('actionB')
    },

    /* 在带命名空间的模块注册全局 action */
    globalAction: {
      root: true,
      handler ({state}, payload) {
        // console.log(state)
      }
    }
  }
}

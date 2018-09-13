<template>
  <div class="demo">
    <router-view></router-view>
    <router-link :to="{name:'list'}">list</router-link>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import utils from '@/common/utils'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('demo')
export default {
  name: 'demo_index',
  props: ['user'],
  data () {
    return {}
  },
  created () {
    utils.base.say()
  },
  mounted () {
    // console.log(7 ** 2)
    // console.log(this.getTitle)
    // const cars = { MW: 3, TESLA: 2, TOYOTA: 1 }
    // console.log(Object.keys(cars))
    // console.log(Object.values(cars))
    // const a1 = [1, 2, 3, 4]
    // const a2 = a1.concat()
    // console.log(a2[0])
    // console.log(this.$root)
    // console.log(this.$refs.starHook.$data.person)
    // this.$modal.show('myModal', { data: 'foo' })
    this.$bar.start()
    this.text = '我是text更改后的数据'
    // console.log(this.$refs.text.textContent)
    // 数据改变后要获取dom
    this.$nextTick(() => {
      // console.log(this.$refs.text.textContent)
    })
    setTimeout(() => this.$bar.finish(), 2000)
  },
  computed: {
    ...mapState(['code', 'person']),
    ...mapGetters(['precode']),
    name: {
      get () {
        return this.$store.state.demo.person.name
      },
      set (value) {
        // console.log(this.$store)
        this.$store.commit('demo/updateName', value)
      }
    }
  },
  methods: {
    ...mapActions(['changeCode']),
    beforeOpen (event) {},
    opened () {
      // console.log(this.$refs.todo.todos)
      this.$refs.todo.changeTodos([
        {
          id: 3,
          text: '待办事项3',
          isComplete: true
        },
        {
          id: 4,
          text: '待办事项4',
          isComplete: false
        }
      ])
    }
  },
  components: {
    'todo-list': {
      template: `
                <div class="todolist">
                  <ul>
                    <li
                      v-for="todo in todos"
                      v-bind:key="todo.id"
                    >
                      <slot :todo="todo">
                          {{ todo.text }}
                      </slot>
                    </li>
                  </ul>
                  <button @click="toBar">给bar传值</button> 
                </div>`,
      data () {
        return {
          todos: [
            {
              id: 1,
              text: '待办事项1',
              isComplete: true
            },
            {
              id: 2,
              text: '待办事项2',
              isComplete: false
            }
          ]
        }
      },
      methods: {
        changeTodos (newTodos) {
          this.todos = newTodos
        },
        toBar () {
          this.$eventbus.emit('bar', '哈麻批')
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.demo
  background-color #fff

.todolist
  width 200px

.todolist ul, .todolist li, .modal-header
  height 40px

.slide-fade-enter-active
  transition all 0.3s ease

.slide-fade-leave-active
  transition all 0.8s cubic-bezier(1, 0.5, 0.8, 1)

.slide-fade-leave-to, opacity 0
  transform translateX(20px)

.slide-fade-enter
  opacity 0.3
  transform translateX(30px)

.star
  width 500px

.star ul li
  color yellow
</style>

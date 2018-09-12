<template>
  <div class="demo">
    <h1 style="color:red;">{{user}}</h1>
    <h3>{{$t('demo.title')}}</h3>
    <h2>{{$t('demo.currentcode')}}：{{code}}</h2>
    <h2>{{$t('demo.precode')}}: {{precode}}</h2>
    <button @click="changeCode">{{$t('demo.changecode')}}</button>
    <select v-model="lang" @change="$i18n.locale = lang">
      <option value='zh'>中文</option>
      <option value='en'>Engilsh</option>
    </select>
    <template v-if="true">
      <input type="text" v-model="name">
    </template>
    <todo-list v-clickoutside>
      <span v-if="slotProps.todo.isComplete" slot-scope="slotProps">
        {{slotProps.todo.text}}
      </span>
    </todo-list>
    <component :is="currentView"></component>
    {{getTitle}}
    <star ref="starHook">
      <template slot="item" slot-scope="{item}">
        <template v-if="item==='张三'">
          <span class="chinese">中国人</span>
        </template>
        <template v-else>
          <span class="foreigner">外国人</span>
        </template>
      </template>
    </star>
    <bar> </bar>
    <button @click="show = !show">
      Toggle
    </button>
    <transition name="custom-classes-transition" enter-active-class="animated bounce" leave-active-class="animated bounceOut">
      <p v-if="show" style="background-color:yellow;">hello</p>
    </transition>
    <modal ref="modalHook" name="myModal" @before-open="beforeOpen" @opened="opened">
      {{modalValue}}
      <todo-list ref="todo"></todo-list>
    </modal>
    <div class="text" ref="text">{{text}}</div>
    <select name="" id="" v-model="optionSel">
      <option disabled value="">请选择</option>
      <option v-for="item in optionData" :value="item.id" :key="item.id">{{ item.name}}</option>
    </select>
    <p>selected:{{optionSel}}</p>
    <div :disabled="false">测试disabled</div>
    <router-link to="/woshilogin">woshilogin</router-link>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('demo')

export default {
  name: 'demo_index',
  props: ['user'],
  data () {
    return {
      show: true,
      lang: 'zh',
      currentView: 'todo-list',
      modalValue: '我是modal的数据',
      text: '幸福啪啪啪',
      optionData: [
        { id: 1, name: '张三1' },
        { id: 2, name: '张三2' },
        { id: 3, name: '张三3' },
        { id: 4, name: '张三4' },
        { id: 5, name: '张三5' }
      ],
      optionSel: 1
    }
  },
  created () {
    this.$router.addRoutes([
      {
        path: '/sss',
        component: () => import('@/pages/demo/index')
      }
    ])
    console.log(11111111111111111)
    console.log(this.$router)
  },
  mounted () {
    console.log(7 ** 2)
    console.log(this.getTitle)
    const cars = { MW: 3, TESLA: 2, TOYOTA: 1 }
    console.log(Object.keys(cars))
    console.log(Object.values(cars))
    const a1 = [1, 2, 3, 4]
    const a2 = a1.concat()
    console.log(a2[0])
    console.log(this.$root)
    console.log(this.$refs.starHook.$data.person)
    // this.$modal.show('myModal', { data: 'foo' })
    this.$bar.start()
    this.text = '我是text更改后的数据'
    console.log(this.$refs.text.textContent)
    // 数据改变后要获取dom
    this.$nextTick(() => {
      console.log(this.$refs.text.textContent)
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
        console.log(this.$store)
        this.$store.commit('demo/updateName', value)
      }
    }
  },
  methods: {
    ...mapActions(['changeCode']),
    beforeOpen (event) {
      console.log(event.params.data)
      console.log(this.$refs.todo)
    },
    opened () {
      console.log(this.$refs.todo.todos)
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

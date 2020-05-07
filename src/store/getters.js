import { mapGetters } from 'vuex'

export default  {
    doneTodos : state => {
        return state.testHeHe + state.cities;
    },

    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ]),
    ...mapGetters({
        // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
        doneCount: 'doneTodosCount'
    })
}


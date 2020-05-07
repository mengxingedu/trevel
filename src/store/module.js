const moduleA = {
    namespaced: true, // 此为开启命名空间 每个modules 都需要
    state : ()=> ({
        const : "我模块A的值:"
    }),
    mutations : {
        increment(hehe1){
            hehe1.const += 'hello world'
        }
    },
    actions : {
        incrementIfOddOnRootSum (haha1){
            haha1.commit('increment')
        }
    }
}

export default {
    moduleA
}
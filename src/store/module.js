const moduleA = {
    namespaced: true, // 此为开启命名空间 每个modules 都需要
    state : ()=> ({
        const : "我模块A的值:"
    }),
    mutations : {
        incrementIfOddOnRootSum(states){
            states.const += 'hello world'
        }
    }
}

export default {
    moduleA
}
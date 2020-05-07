<template>
    <div class="header">
        <div class="header-left"><div style="text-align:center" class="iconfont ">&#xe624;</div></div>
        <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩组题</div>
        <router-link to='/city'>
            <div class="header-right"><span class="dizi">{{this.currentCity}}</span><span style="margin-left:.1rem" class="iconfont arrow-icon">&#xe62b;</span></div>
        </router-link>
    </div>
</template>

<script>
// import configs from '../../../assets/js/vue.config'

import { mapState } from 'vuex'
export default{
    name : 'Home',
    computed : {
        // ...mapState(['cities'])

        ...mapState({
            currentCity : 'cities'
        })

    }
    // computed : mapState({
    //     cities : 'cities'
    // })
}
</script>


<!--
使用stylus样式
scoped 只真对当前组件使用样式，不对其他组件影响，局部化样式
-->
<style lang="stylus"  scoped>
    // @import '../../../assets/styles/varibles.styl'
    @import '~@/assets/styles/varibles.styl'
    @import '~@/assets/styles/mxmins.styl'
    .header
        display :flex
        line-height : $HeaderHight
        background:$bgColor
        color:#fff 
        .header-left
            width : .64rem
            float left
        .header-input 
            flex : 1
            height : .64rem
            line-height : .64rem
            background: #fff
            border-radius:.1rem
            margin : .1rem .2rem 
            padding-left .2rem
            color : #ccc;
        .header-right 
            min-width : 1.04rem
            float :right
            color:#fff 
            float left
            padding 0 .1rem
            .arrow-icon
                font-size :.2rem
                margin-left : -0.04rem

</style>
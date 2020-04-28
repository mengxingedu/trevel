<template>
    <div class="header">
        <router-link to='/'><span class="header-back iconfont">&#xe624;</span></router-link>
        城市选择
    </div>
</template>

<script>
export default{
    name : 'CityHeader'
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'
.header
    position relative
    height $HeaderHight
    line-height $HeaderHight
    color #fff
    text-align center
    overflow hidden
    background $bgColor
    font-size .3rem
    .header-back
        position absolute 
        left 0
        top 0
        width .6rem
        font-size .35rem
        color #fff
</style>
<template>
    <div class="Content">
        <div class="header-abs">
            <router-link to='/'><span class="header-back iconfont">&#xe624;</span></router-link>
        </div>
    </div>
</template>

<script>
export default{
    name : 'DetailHeader'
}
</script>

<style lang='stylus' scoped>
.Content
    position relative
    top 0
    right 0
    left 0
    z-index 3
    height .88rem
    line-height .88rem
    background #00bcd4
    .header-abs
        width .6rem
        height .88rem
        float left
        text-align center
        .header-back
            color #fff
</style>
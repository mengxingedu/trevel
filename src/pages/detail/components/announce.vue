<template>
    <div class="announce">
        <span class="iconfont announce-icon">&#xe6ab;</span>
        <p class="announce-text">【景区现已开放】疫情防控期间，进入景区需佩戴口罩，与他人保持1.5米距离。同时，请您配合景区做好入园体温检测及实名登记工作。由此给您带来不便，敬请谅解。</p>
        <span class="iconfont address-arrow">&#xe620;</span>
    </div>
</template>

<script>
export default {
    name : 'DetailAnnounce'
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/mxmins.styl'
    .announce
        background #fff5e5
        color #ff8300
        height .88rem
        line-height .88rem
        display flex
        margin-bottom .2rem
        .announce-icon
            margin-left .2rem
            flex 1
        .announce-text
            ellipsis()
            float left
            padding-right .6rem
        .address-arrow
            position absolute
            right .3rem
</style>
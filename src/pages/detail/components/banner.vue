<template>
    <div class="banner"> 
        <img class='banner-img' src="//img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_600x330_28bda6b0.jpg" alt="">
        <div class='banner-info'>
            <div class='banner-title'>深圳野生动物园(AAAA景区)</div>
            <div class="mp-imgswipeicon"><span class="iconfont img-icon">&#xe603;</span><span>22</span></div>
        </div>
    </div>
</template>

<script>
export default{
    name : 'DetailBanner'
}
</script>

<style lang='stylus' scoped>
    .banner
        position relative
        width 100%
        height 0
        padding-bottom 55%
        overflow hidden
        color #fff
        .banner-img
            width 100%
        .banner-info
            position absolute 
            left .2rem
            right .2rem
            bottom .3rem
            height .36rem
            font-size .2rem
            .banner-title
                font-size .36rem
                line-height .36rem
                width 100%
            .mp-imgswipeicon
                position absolute
                bottom .55rem
                padding .1rem .2rem
                background rgba(0, 0, 0, .7)
                border-radius .1rem
                .img-icon
                    margin-right .05rem
                    font-size .2rem

</style>
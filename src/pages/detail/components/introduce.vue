<template>
    <div class="baseinfo">
        <div class="baseinfo-card">
            <div class="item">
                <div class="baseinfo-score">
                    <span class="commentcard-score">5.0</span>
                    <span class="commentcard-text">分</span>
                    <span class="commentcard-desc">超赞</span>
                </div>
                <div>
                    <span class="mp-totalcommentnum">24498条评论</span>
                    <span class="mp-totalcommentnum">3条攻略</span>
                    <span class="iconfont rightarrow">&#xe620;</span>
                </div>
            </div>
            <div class="item border-left">
                <div class="baseinfo-con">
                    <span class="sightcard-title">景点简介</span>
                    <p class="sightcard-text">开放时间、贴士</p>
                    <span class="iconfont rightarrow">&#xe620;</span>
                </div>
            </div>
        </div>
        <div class="baseinfo-address border-top">
            <span class="iconfont address-icon">&#xe681;</span>
            <p class="address-text">广东省深圳市南山区西丽镇西丽路4065号</p>
            <span class="iconfont address-arrow">&#xe620;</span>
        </div>
    </div>
</template>

<script>
export default{
    name : 'DetailIntroduce'
}
</script>

<style lang='stylus' scoped>
    .baseinfo
        position relative
        top -.1rem
        background #fff
        padding .1rem .2rem
        border-top-left-radius .1rem
        border-top-right-radius .1rem   
        margin-bottom .1rem  
        .baseinfo-card
            padding .1rem 0 .2rem
            display flex
            .item
                flex 1
                position relative
                .baseinfo-score
                    color #ff8300;
                    margin-bottom .1rem
                    .commentcard-score
                        font-size .44rem
                        line-height .44rem
                    .commentcard-text
                        font-size .28rem
                        margin-right .1rem
                    .commentcard-desc
                        font-size .28rem
                .mp-totalcommentnum
                    font-size .24rem
                    color #9e9e9e
                    line-height .32rem
                    margin-right .2rem
                .rightarrow
                    position absolute
                    color #9e9e9e
                    font-size .24rem
                    top .45rem
                    right .1rem
                .baseinfo-con
                    padding-left .3rem
                .sightcard-title
                    font-size .28rem
                    line-height .48rem
                    color #212121
                .sightcard-text
                    color #9e9e9e
                    font-size .24em
                    margin-top .1rem
        .baseinfo-address
            padding .2rem 0
            line-height .36rem
            .address-icon
                position absolute
                color #9e9e9e
                font-size .36rem
                top 0.24rem
            .address-text
                padding 0 .56rem
            .address-arrow
                position absolute
                color #9e9e9e
                font-size .24rem
                right .1rem
                top .38rem

        


</style>
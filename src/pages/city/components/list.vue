<template>
    <div class="list">
        <div>
            <div class="area">
                <div class="title border ">你的位置</div>
                <div class='areaList clearfix'>
                    <p class="dizi">北京</p> 
                </div>
            </div>
            <div class="area">
                <div class="title border ">热门城市</div>
                <div class='areaList clearfix'>
                    <p class="dizi">北京</p>     
                    <p class="dizi">北京</p>     
                    <p class="dizi">北京</p>     
                    <p class="dizi">北京</p>     
                    <p class="dizi">北京</p>     
                    <p class="dizi">北京</p>
                </div>
            </div>
            <div class="area">
                <div class="title border">A</div>
                <ul>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                </ul>
            </div>
            <div class="area">
                <div class="title border">A</div>
                <ul>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                </ul>
            </div>
            <div class="area">
                <div class="title border">A</div>
                <ul>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                </ul>
            </div>
            <div class="area">
                <div class="title border">A</div>
                <ul>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                    <li class='zmlist'>阿拉伯</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name : 'CityList'
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mxmins.styl'

.list
    width 100%
    height 100%
    position absolute
    top : 1.58rem
    left: 0
    overflow hidden
    .title
        font-size .26rem
        line-height .5rem
        height .5rem
        padding-left .2rem
        background  #eee
        border-bottom: .01rem solid #48484863
        border-top: .01rem solid #48484863
    .areaList
        padding .2rem .2rem 0
        overflow hidden
        .dizi
            padding .2rem
            border .02rem solid #eee
            text-align center
            float left
            width calc(94% / 3 - .4rem)
            margin-left 2%
            margin-bottom .2rem
        .dizi:nth-child(3n - 2)
            margin-left 0%
    .zmlist
        line-height .7rem
        height .7rem
        padding-left .2rem
        border-bottom  .01rem solid #48484863 
    .zmlist:last-child
        border none
</style>
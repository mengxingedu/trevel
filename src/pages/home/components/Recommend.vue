<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <router-link class="item border-bottom" v-for="item of list" :key='item.id' tag='li' :to="'/detail/' + item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <p class="item-Price">￥{{item.Price}}起</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default{
    name : 'HomeRecommend',
    props : {
        list : Array
    }
}
</script>

<style lang='stylus' scoped>
    @import '~@/assets/styles/mxmins.styl'

    .title
        line-height .8rem
        background #eee
        text-indent .3rem
    .item
        display flex
        height 1.9rem //是量的宽度的两遍
        overflow hidden
        border-bottom .01rem solid #eee
        .item-img
            width 1.9rem
            height 1.8rem
            padding .05rem
        .item-info
            flex 1
            padding .05rem
            min-width 0
            .item-title
               line-height .64rem
               font-size .32rem
               ellipsis()
            .item-desc
                line-height .4rem
                font-size .28rem
                
                margin-bottom .1rem
                ellipsis()
            .item-Price
                color orange
                font-size .34rem
                line-height .3rem
    
</style>
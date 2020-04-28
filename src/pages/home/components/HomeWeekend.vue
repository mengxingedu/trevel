<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="item of list" :key='item.id'>
                <p class="item-pimg"><img class="item-img" :src="item.imgUrl" alt=""></p>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
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
        padding-bottom .1rem
        margin-bottom .2rem
        .item-pimg
            width 100%
            height 0
            padding-bottom 38.01%
            overflow hidden
            .item-img
                width 100%
        .item-info
            text-indent .2rem
            min-width 0
            .item-title
                font-size .3rem
                line-height .5rem
                ellipsis()
            .item-desc
                color #666
                font-size .24rem
                line-height .3rem
                ellipsis()
            
    
</style>
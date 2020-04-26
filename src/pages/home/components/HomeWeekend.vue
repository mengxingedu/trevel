<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="item of recommendList" :key='item.id'>
                <img class="item-img" :src="item.imgUrl" alt="">
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
    data (){
        return {
            recommendList : [
            {
                id :'001',
                imgUrl : '//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg',
                desc : '岭南印象园江面上龙船竞渡，水中好戏不断',
                title : '岭南印象园',
                Price : '178.5'
            },
            {
                id :'002',
                imgUrl : '//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg',
                desc : '放养式动物园让你和动物们“零距离”',
                title : '深圳野生动物园',
                Price : '123.2'
            },
            {
                id :'003',
                imgUrl : '//imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg',
                desc : '刺激、美好、难忘的旅游时光',
                title : '黄腾峡天门悬廊',
                Price : '121'
            }
        ]
        }
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
        .item-img
            width 100%
            height 1.8rem
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
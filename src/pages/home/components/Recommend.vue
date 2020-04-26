<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key='item.id'>
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <p class="item-Price">￥{{item.Price}}起</p>
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
                imgUrl : 'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/5330f711cb6601e46a8e5e33fa2bf235.jpg_640x480x70_c9d7dd24.jpg',
                desc : '岭南印象园',
                title : '岭南印象园江面上龙船竞渡，水中好戏不断',
                Price : '178.5'
            },
            {
                id :'002',
                imgUrl : 'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/89ed3805873bf304e5a3769bbf00788f.jpg_640x480x70_c9cab6c7.jpg',
                desc : '放养式动物园让你和动物们“零距离”',
                title : '深圳野生动物园',
                Price : '123.2'
            },
            {
                id :'003',
                imgUrl : 'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/a5b44b4bf00e60166a6cf00bf2d4325c.jpg_640x480x70_d53cc174.jpg',
                desc : '刺激、美好、难忘的旅游时光',
                title : '黄腾峡天门悬廊',
                Price : '121'
            },
            {
                id :'004',
                imgUrl : 'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/b4bc835dd35e93840e9582aebbfbcaa0.jpg_640x480x70_52b53223.jpg',
                desc : '曲折逶迤，百转回廊的南粤建筑菁华',
                title : '南粤苑',
                Price : '146'
            },
            {
                id :'005',
                imgUrl : 'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/8d0d6d136fddb09e001b93eb3a242376.jpg_640x480x70_a6053900.jpg',
                desc : '北京动物园始建于清光绪三十二年（1906年），是中国开放最早、饲养展出动物种类最多的动物园。北京动物园位于西直门外，交通非常便利，公交地铁都能到达。整个动物园全部转完要一整天的时间。周末，整个公园成了孩子的快乐天地！',
                title : '北京动物园',
                Price : '234'
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
                color #ccc
                margin-bottom .1rem
                ellipsis()
            .item-Price
                color orange
                font-size .34rem
                line-height .3rem
    
</style>
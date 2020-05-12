<template>
    <div class="recommend-container">
        <h3 class="recommend-title">热门推荐</h3>
        <ul>
            <li class="recommend-item border-top clearfix" v-for='item of recommendDataList' :key='item.id'>
                <img class='recommend-img' :src="item.imag" alt="">
                <div class="recommend-info ">
                    <div class="clearfix">
                        <p class="recommend-sight">{{item.name}}<span class="recommend-sightstar">({{item.sightstar}}A)</span></p>
                        <p class="recommend-price">
                            ￥<span class="recommend-num">{{item.price}}</span>
                            <span class="recommend-flag">起</span>
                        </p>
                    </div>
                    <div class="recommend-comment">
                        <span>
                            <span :class="['iconfont','Star', {'starlevel-gain' : arr < item.Star}]" v-for='arr of 5' :key="'gain' + arr">&#xe647;</span>
                        </span>
                        <span class="recommend-commentnum">{{item.commentnum}}条评论</span>
                    </div>
                    <p class="recommend-subposition">{{item.subposition}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

 <script>
 export default{
     name : 'DetailRecommend',
     data (){
         return {
             recommendDataList : [
                 {
                     id : '0001',
                     name : '深圳欢乐谷',
                     sightstar : '5',
                     imag : 'http://img1.qunarzz.com/sight/p0/1503/cd/cd023b889435b33.water.jpg_228x168_bd6a2a84.jpg',
                     price : '220',
                     Star : 5,
                     commentnum : '37735',
                     subposition : '深圳·盐田区',
                 },
                 {
                     id : '0002',
                     name : '东部华侨城',
                     sightstar : '4',
                     imag : 'http://img1.qunarzz.com/sight/p0/1611/97/97dbde6eccdfef72a3.water.jpg_228x168_b4eb86ea.jpg',
                     price : '134.5',
                     Star : '5',
                     commentnum : '22190',
                     subposition : '深圳·盐田区',
                 }
             ]
         }
     }
 }
 </script>

 <style lang='stylus' scoped>
@import '~@/assets/styles/mxmins.styl'

  .recommend-container
    background #fff
    margin-top .2rem
    .recommend-title
        position relative
        height .88rem
        line-height .88rem
        padding 0 .2rem
        font-size .3rem
        color #333
    .recommend-img
        margin .2rem .2rem 0
        width 1.62rem
        height 1.62rem
        float left
    .recommend-info
        width calc(100% - 2.02rem)
        height 1.8rem
        margin-top .2rem
        float left
        .recommend-sight
            width 60%
            float left
            color #212121
            line-height .4rem
            height .4rem
            font-size .3rem
            ellipsis()
            .recommend-sightstar
                color #adadad
        .recommend-price
            line-height .4rem
            color #ff9800
            float right 
            font-size .24rem
            margin-right .2rem
            .recommend-num
                font-size .36rem
        .recommend-comment
            margin-top .2rem
            .Star
                color #e0e0e0
                font-size .22rem
                margin-right .05rem
            .starlevel-gain
                color #ffb436
            .recommend-commentnum
                color #9e9e9e
                font-size .24rem
                margin-left .3rem
        .recommend-subposition
            color #9e9e9e
            margin-top .4rem
 </style>
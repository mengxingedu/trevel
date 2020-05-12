<template>
    <div class="comment-con">
        <h3 class="comment-title">用户评论</h3>
        <ul>
            <li class="comment-item border-top" v-for="item of commentList" :key='item.id'>
                <div class="comment-item-title">
                    <span>
                        
                        <span :class="['iconfont','Star',{'starlevel-gain' : arr <= item.Star}]" v-for='arr of 5' :key="'star' + arr">&#xe647;</span>
                    </span>
                    <p class="comment-item-title-right">
                        <span class="">{{item.name}}&nbsp;&nbsp;&nbsp;{{item.time}}</span>
                    </p>
                    <img class="quality" v-if='item.isQuality' :src="require('../../../assets/image/quality.png')" alt="">
                </div>
                <div>
                    <p class="comment-conent">{{item.desc}}</p>
                    <p class="iconfont ticket-extend">&#xe62f;</p>
                </div>
                <div class="comment-imgs clearfix">
                    <div class="comment-imgouter"
                     v-for='(imgArr, index) of item.imgs' :key="'imgs' + index" 
                     v-show='index < 6' @click="handleGallaryClick"
                     >
                        <img class="comment-img" :src="imgArr" alt="">
                        <p class="comment-tagnum" v-if='index === 5'>共{{item.imgs.length}}张</p>
                    </div>
                </div>
            </li>
        </ul>
        <p class="AllComments">
            全部评论<span class="iconfont rightarrow">&#xe620;</span>
        </p>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name : 'DetailCommentList',
    data (){
        return {
            commentList : [
                {
                    id : '001',
                    Star : 2,
                    name : 't**1',
                    time : '2020-05-09',
                    isQuality : true,
                    desc : ' 2018.1.9日去的。当天下雨，园区内游客了了，许多节目因天气原因暂停取消，可以理解。但是雨中逛圆也是一种心情，空气极好。 孩子最喜欢火烈鸟，大人比较喜欢熊猫。但是熊猫基本不动，醒来也是吃竹子。看了马戏团表演和百兽游园，都很不错， 尤其是马戏团表演， 看着很感动，不过观众太少很影响氛围。海豚表演没有看，但是为了补偿每个孩子可以免费和海豚合影， 也不错，合影前需洗手。深圳动物园每种动物都很多，老虎也有白色的。 园区内吃喝都是收费的，个人觉得价格可以接受吧。游览车20一人，需保留票根。 最大的体验，带孩子游园很累，最好穿运动鞋 ',
                    imgs : [
                        'http://img1.qunarzz.com/p/tts5/1812/92/df9aa8800a2b6002.jpg_228x168_7641125e.jpg',
                        'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/fusion/20197/86f5279bc244d35b7b99fe6eabbe74cf.jpg_228x168_3b83c5f3.jpg',
                        'http://img1.qunarzz.com/p/tts4/1812/37/b42284ce32079a02.jpg_228x168_edffd034.jpg',
                        'http://img1.qunarzz.com/p/tts8/1812/d5/ebcac07ceecabb02.jpg_228x168_fe85b2e7.jpg',
                        'http://img1.qunarzz.com/p/tts3/1812/6f/745f0c3828b7e202.jpg_228x168_4c190e42.jpg',
                        'http://img1.qunarzz.com/p/tts5/1812/71/5f9518622490402.jpg_228x168_4d91d608.jpg',
                        'https://imgs.qunarzz.com/p/tts2/1808/53/e011ea4669b07902.jpg_240x240_4a5bb18a.jpg',
                        'https://imgs.qunarzz.com/piao/fusion/1908/5c/f64ed8b8c518d702.jpg_240x240_ce2fda7d.jpg',
                        'https://imgs.qunarzz.com/piao/fusion/1812/65/a12a0e198c541102.jpg_240x240_b08bcaf1.jpg',
                    ]
                }
            ]
        }
    },
    methods : {
        handleGallaryClick (){
            
            this.setIsShowGallary()
        },
        ...mapMutations(['setIsShowGallary'])
    }
}
</script>

<style lang='stylus' scoped>
.comment-con
    background #fff
    .comment-title
        position relative
        height .88rem
        line-height .88rem
        padding 0 .2rem
        font-size .3rem
        color #333
        
    .comment-item
        padding .2rem .2rem .3rem
        .comment-item-title
            line-height .6rem
            margin-top .1rem
            .Star
                color #e0e0e0
                font-size .22rem
                margin-right .05rem
            .starlevel-gain
                color #ffb436
            .comment-item-title-right
                float right 
                font-size .24rem
                color #212121
    .quality
        position absolute
        top : .25rem
        right .2rem
        width 1.42rem
        height .96rem
    .comment-conent
        color #616161
        font-size .26rem
        line-height .42rem
        word-break break-all
        word-wrap break-word
        overflow hidden
        height 2.1rem
        text-align justify
    .ticket-extend
        color #e9e9e9
        font-size .26rem
        line-height .48rem
        height .48rem
        text-align center
    .comment-imgs
        margin .2rem 0 .1rem
        .comment-imgouter
            position relative
            width 33.33%
            float left
            margin-bottom .1rem
            .comment-img
                width calc(100% - .14rem)
                margin 0 .07rem
            .comment-tagnum
                position absolute
                right .07rem
                bottom .2rem
                width .94rem
                height .4rem
                color #fff
                background rgba(0,0,0,.5)
                border-top-left-radius .2rem
                border-bottom-left-radius .2rem
                line-height .4rem
                text-align right 
                font-size .24rem
    .AllComments
        text-align center
        font-size .24rem
        text-align center
        line-height .88rem
        border-top 1px dashed #dadada
        color #616161
        .rightarrow
            font-size .24rem
            color #616161
</style>
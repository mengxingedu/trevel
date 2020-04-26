<template>
    <div class="icons">
        <swiper :options='swiperOption'>
            <swiper-slide v-for='(page, index) of pages' :key='index'>
                <div class="icon" v-for="arr of page" :key='arr.id'>
                    <div class="icon-img">
                        <img class='icon-img-conent' :src="arr.imgsrc" alt="" >
                    </div>
                    <p class="icon-desc">{{arr.title}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name : 'HomeIcons',
    data (){
        return{
            iconList : [
                {
                    id : 'icon001',
                    title : '民宿客栈',
                    imgsrc: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png'
                },
                {
                    id : 'icon002',
                    title : '专车自驾',
                    imgsrc: 'https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png'
                },
                {
                    id : 'icon003',
                    title : '赚钱·信用卡',
                    imgsrc: 'https://picbed.qunarzz.com/5b6737be49ca243072ca614f07803b83.png'
                },
                {
                    id : 'icon004',
                    title : '旅游团购',
                    imgsrc: 'https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png'
                },
                {
                    id : 'icon005',
                    title : '一日游',
                    imgsrc: 'https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png'
                },
                {
                    id : 'icon006',
                    title : '特惠酒店',
                    imgsrc: 'https://picbed.qunarzz.com/f6bb08a239ce1b038204120a8d1e4669.png'
                },
                {
                    id : 'icon007',
                    title : '借钱',
                    imgsrc: 'https://picbed.qunarzz.com/3a08f360e958ccb2b947049387873ace.png'
                },
                {
                    id : 'icon008',
                    title : '白金卡',
                    imgsrc: 'https://picbed.qunarzz.com/19b4f6d2fabd617789fa5aad65b249da.png'
                },
                {
                    id : 'icon009',
                    title : '借钱',
                    imgsrc: 'https://picbed.qunarzz.com/3a08f360e958ccb2b947049387873ace.png'
                }
            ],
            swiperOption: {
                
            }
        }
    },
    computed : {
        pages (){ //将数组切割成多页
            const pages = []
            this.iconList.forEach((item, index) => {
               const page = Math.floor(index / 8) 
               if(!pages[page]){
                   pages[page] = []
               }
               pages[page].push(item);
            })
            return pages;
        }
    }
}
</script>

<style lang='stylus' scoped>
    @import '~@/assets/styles/varibles.styl'
    @import '~@/assets/styles/mxmins.styl';
    .icons >>> .swiper-container
        // width 100%  //1：这里是100%的话
        height 0;
        // overflow hidden 
        padding-bottom : 50%; //【50%的意思是 height + 占比50%】 那个这个50%指的是当前元素占这个总宽度的50%，不是屏幕高度的50%
        .icon
            position relative
            width 25%
            height 0
            float left
            padding-bottom  25%
            overflow hidden
            .icon-img
                position absolute
                top 0
                left 0
                right 0
                box-sizing border-box
                padding .1rem
                padding-bottom .44rem
                .icon-img-conent
                    display block
                    margin 0 auto
                    width 55%
                    height 100%
            .icon-desc
                position absolute
                bottom .22rem
                left 0
                right 0
                line-height : .44rem
                color : $color333
                text-align center
                ellipsis()

</style>
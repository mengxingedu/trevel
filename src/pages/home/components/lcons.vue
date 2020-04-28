<template>
    <div class="icons">
        <swiper :options='swiperOption'>
            <swiper-slide v-for='(page, index) of pages' :key='index'>
                <div class="icon" v-for="arr of page" :key='arr.id'>
                    <div class="icon-img">
                        <img class='icon-img-conent' :src="arr.imgUrl" alt="" >
                    </div>
                    <p class="icon-desc">{{arr.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name : 'HomeIcons',
    props : {
        list : Array
    },
    data (){
        return{
            swiperOption : {
                autoplay : false
            }
        }
    },
    computed : {
        pages (){ //将数组切割成多页
            const pages = []
            this.list.forEach((item, index) => {
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
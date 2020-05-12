<template>
    <div class="container">
        <div class="wrapper">
            <swiper ref="mySwiper" :options="swiperOptions">
                <!--第一种写法-->
                <swiper-slide v-for="(item, index) of imagList" :key='index'>
                    <img class="swiper-img" :src="item.image" />
                </swiper-slide>
                 <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default{
    name : 'gallary',
    props : {
        imagList : {
            type : Array
        }
    },
    data (){
        return {
            swiperOptions : {
                pagination : {
                    el : '.swiper-pagination',
                    type: 'fraction',
                },
                observer:true,
                observeParents:true,
                observeSlideChildren:true,
            }
        }
    }
}
</script>

<style lang='stylus' scoped>

    .wrapper >>> .wrapper
        width 100%
    .wrapper >>> .swiper-container
        overflow initial
    .wrapper >>> .swiper-pagination 
        font-size .3rem
        color #fff
        bottom  -1rem
.container
    position fixed
    z-index 10
    top 0
    right 0
    bottom 0
    left 0
    background #000
    display flex
    flex-direction column
    justify-content center    
    .wrapper
        position relative
        height 0
        // overflow hidden
        padding-bottom 100%
        .swiper-img
            width 100%
</style>
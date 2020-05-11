<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper ref="mySwiper" :options="swiperOptions">
                <!--第一种写法-->
                <swiper-slide>
                    <img class="swiper-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/acda5a9b-086c-4678-9447-f92eaf34ed15.jpg_r_1280x840x95_19003c13.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <img class="swiper-img" src="https://img1.qunarzz.com/p/tts7/1809/e2/149f578bbb9c7302.jpg_r_1280x840x95_fa2ccf25.jpg" />
                </swiper-slide>
                 <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default{
    name : 'gallary',
    data (){
        return {
            swiperOptions : {
                // pagination : '.swiper-pagination',
                // paginationType : 'fraction',
                // observeParents:true,
                // observer:true,
                pagination : {
                    el : '.swiper-pagination',
                    type: 'fraction',
                    observer:true,
                    observeSlideChildren:true,
                }
            }
        }
    },
    methods : {
        handleGallaryClick(){
            this.setIsShowGallary(false)
        },
        ...mapMutations(['setIsShowGallary'])
    },
    computed : {
        ...mapState(['isShowGallary'])
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
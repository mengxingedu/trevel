<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions" v-if='listList'>
      <!--第一种写法-->
      <swiper-slide v-for="arr in list" :key="arr.id">
        <img class="swiper-img" :src="arr.imgUrl" />
      </swiper-slide>
      <!--第二种写法-->
      <!-- <swiper-slide>
        <img class="swiper-img" :src="imgUrl" />
      </swiper-slide> -->
      <!--第三种种写法-->
      <!-- <swiper-slide><img :src='smallImg' /></swiper-slide> -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
  
</template>

<script>
// import smallImg from '../../../assets/image/home_ban3.jpg'
export default {
  name: "HomeSwiper", //组件的名字
  props : {
    list : Array
  },
  data () {
    return {
      // imgUrl: require("../../../assets/image/home_ban2.jpg"), //第一种写法
      swiperOptions: {
        loop: true,
        autoplay : { //解决autoplay自动轮播点击后不会自动轮播
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed : {
    listList() {
      return this.list.length;
    }
  }
};
</script>


<style lang='stylus' scoped>
 
 .wrapper >>> .swiper-pagination-bullet 
    background-color rgba(0,0,0, 0.7)
  .wrapper >>> .swiper-pagination-bullet-active
    background : #fff;

.wrapper
  width : 100%
  background : #eee
  //第二种
  height : 31.25vw

  // 第一种图片自适应
  // height : 0;
  // overflow hidden
  // padding-bottom : 50.7%  //height/width
  // padding-boottom : .36rem
  .swiper-img 
    width: 100%;
 
 
</style>
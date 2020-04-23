<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide><img :src='imgUrl' /></swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "HomeSwiper", //组件的名字
  data() {
    return {
      imgUrl : '../assets/image/home_ban1.jpg',
      swiperOptions: {
        autoplay : true, //自动轮播
        // slidesPerView : 2,  
        loop : true,
        autoplay : {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el : '.swiper-pagination'
        }
      }
    };
  }
};
</script>


<style lang='stylus' scoped>
.swiper-slide {
  height : 1.2rem;
  background: green;
}
</style>
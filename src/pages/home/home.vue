<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
    </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper';
import HomeIcons from './components/lcons'
import HomeRecommend from './components/Recommend'
export default{
    name : 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend
    }
}
</script>
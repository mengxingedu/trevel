<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper';
import HomeIcons from './components/lcons'
export default{
    name : 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons
    }
}
</script>
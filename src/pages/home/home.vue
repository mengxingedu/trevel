<template>
    <div>
        <home-header></home-header>
        <home-swiper :list='swiperList'></home-swiper>
        <home-icons :list='iconList'></home-icons>
        <home-recommend :list='recommendList'></home-recommend>
        <home-weekend :list='weekendList'></home-weekend>
        <scenic-spot :list='vacationList'></scenic-spot>

    </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper';
import HomeIcons from './components/lcons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/HomeWeekend'
import scenicSpot from './components/scenicSpot'
import axios from 'axios'
import { mapState } from 'vuex'


export default{
    name : 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend,
        scenicSpot
    },
    data (){
        return {
            lastCity : '',
            swiperList : [],
            iconList : [],
            recommendList : [],
            weekendList : [],
            vacationList : []
        }
    },
    mounted (){
        this.lastCity = this.cities;
        this.getHomeInfo()
    },
    activated (){
        if(this.lastCity !== this.cities){
            this.lastCity = this.cities;
            this.getHomeInfo()
        }
    },
    methods : {
        getHomeInfo(){
            axios.get('/api/index.json?cities=' + this.cities)
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            if(res && res.data && res.data.ret){
                res = res.data.data;
                this.swiperList = res.swiperList;
                this.iconList = res.iconList;
                this.recommendList = res.recommendList;
                this.weekendList = res.weekendList;
                this.vacationList = res.vacationList;
            }

            
        }
    },
    computed : {
        ...mapState(['cities'])
    }
}
</script>
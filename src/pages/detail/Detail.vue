<template>
    <div class='Detail-main clearfix'>
        <DetailHeader />
        <DetailBanner @click.native='handleGallaryClick' />
        <DetailIntroduce />
        <DetailAnnounce />
        <DetailTicketgroup />
        <DetailCommentList />
        <DetailRecommend />
        <Gallary v-show="isShowGallary" :imagList='imagList' @click.native="handleGallaryClick" />
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

import DetailHeader from './components/header'
import DetailBanner from './components/banner'
import DetailIntroduce from './components/introduce'
import DetailAnnounce from './components/announce'
import DetailTicketgroup from './components/ticketgroup'
import DetailCommentList from './components/commentList'
import DetailRecommend from './components/recommend'
import Gallary from '@/common/gallary/gallary'
import axios from 'axios'

export default {
    name : 'Detail',
    data (){
        return {
           imagList : [
               {
                   image : "https://img1.qunarzz.com/vs_ceph_vs_tts/e708871a-e36c-468b-85e8-fc61f42849fd.jpg_r_640x420x95_f1a28754.jpg",
               },
               {
                   image : "https://img1.qunarzz.com/p/tts7/1501/f8/e09e7933515aec.jpg",
               }
           ] 
        }
    },
    components : {
        DetailBanner,
        DetailIntroduce,
        DetailAnnounce,
        DetailTicketgroup,
        DetailCommentList,
        DetailRecommend,
        Gallary,
        DetailHeader
    },
    computed : {
        ...mapState(['isShowGallary'])
    },
    methods : {
        handleGallaryClick(){ //显示隐藏取反
            console.log(123)
            this.setIsShowGallary()
        },
        ...mapMutations(['setIsShowGallary']),
        getDatailInfo (){
            // axios.get('/api/detail.json?id=' + this.$route.params.id)//第一种写法，但是太麻烦
            axios.get('/api/detail.json', {
                params : {
                    id : this.$route.params.id
                }
            }).then(this.handleGetDataSucc);

        },
        handleGetDataSucc (res){
            res = res.data;
            if(res.ret && res.data){
                const data = res.data;
                console.log(data)
            }
        }   
    },
    mounted (){
        this.getDatailInfo();
    },
    activated (){
        this.getDatailInfo();
    }
}
</script>

<style lang='stylus' scoped>
.Detail-main
    background #f5f5f5
</style>
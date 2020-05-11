<template>
    <div class='Detail-main clearfix'>
        <DetailBanner />
        <DetailIntroduce />
        <DetailAnnounce />
        <DetailTicketgroup />
        <DetailCommentList />
        <DetailRecommend />
        <Gallary v-show="this.isShowGallary" />
    </div>
</template>

<script>
import {mapState} from 'vuex'

import DetailBanner from './components/banner'
import DetailIntroduce from './components/introduce'
import DetailAnnounce from './components/announce'
import DetailTicketgroup from './components/ticketgroup'
import DetailCommentList from './components/commentList'
import DetailRecommend from './components/recommend'
import Gallary from '@/common/gallary/gallary'

export default {
    name : 'Detail',
    components : {
        DetailBanner,
        DetailIntroduce,
        DetailAnnounce,
        DetailTicketgroup,
        DetailCommentList,
        DetailRecommend,
        Gallary
    },
    computed : {
        ...mapState(['isShowGallary'])
    }
}
</script>

<style lang='stylus' scoped>
.Detail-main
    background #f5f5f5
</style>
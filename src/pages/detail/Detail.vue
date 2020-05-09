<template>
    <div class='Detail-main clearfix'>
        <DetailBanner />
        <DetailIntroduce />
        <DetailAnnounce />
        <DetailTicketgroup />
        <DetailCommentList />
        <DetailRecommend />
    </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailIntroduce from './components/introduce'
import DetailAnnounce from './components/announce'
import DetailTicketgroup from './components/ticketgroup'
import DetailCommentList from './components/commentList'
import DetailRecommend from './components/recommend'

export default {
    name : 'Detail',
    components : {
        DetailBanner,
        DetailIntroduce,
        DetailAnnounce,
        DetailTicketgroup,
        DetailCommentList,
        DetailRecommend
    }
}
</script>

<style lang='stylus' scoped>
.Detail-main
    background #f5f5f5
</style>
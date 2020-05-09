<template>
    <div class='Detail-main clearfix'>
        <DetailBanner />
        <DetailIntroduce />
        <DetailAnnounce />
        <DetailTicketgroup />
        <DetailCommentList />
    </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailIntroduce from './components/introduce'
import DetailAnnounce from './components/announce'
import DetailTicketgroup from './components/ticketgroup'
import DetailCommentList from './components/commentList'

export default {
    name : 'Detail',
    components : {
        DetailBanner,
        DetailIntroduce,
        DetailAnnounce,
        DetailTicketgroup,
        DetailCommentList
    }
}
</script>

<style lang='stylus' scoped>
.Detail-main
    background #f5f5f5
</style>
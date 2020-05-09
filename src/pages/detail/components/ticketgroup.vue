<template>
    <div class="ticketgroup">
        <h3 class="ticket-type">日场夜场通用</h3>
        <ul>
            <li class="item border-bottom"
                 v-for='(item, index) of ticketList' :key='item.id' v-show="index < 2 || !isSurplus">
                <p class="item-title">{{item.title}}</p>
                <div class="ticket-type-price">
                    ￥<span class="price-num">{{item.price}}</span><span class="ticket-numword">起</span>
                </div>
                <span class="iconfont ticket-extend">&#xe62f;</span>
            </li>
        </ul>
        <p class="more-refresh" @click='handleClick' v-if="isSurplus">
            查看剩余产品 <span class="iconfont ticket-extend">&#xe62f;</span>
        </p>
    </div>
</template>

<script>
export default{
    name : 'DetailTicketgroup',
    data () {
        return {
            isSurplus : true,
            ticketList : [
                {
                    id : '0001',
                    title :'成人票',
                    price : '200'
                },
                {
                    id : '0002',
                    title :'[当天可定]成人票',
                    price : '198.99'
                },
                {
                    id : '0003',
                    title :'儿童票',
                    price : '140'
                },
                {
                    id : '0004',
                    title :'老人票',
                    price : '140'
                },
                {
                    id : '0005',
                    title :'青少年/学生票',
                    price : '190'
                },
                {
                    id : '0006',
                    title :'生日票',
                    price : '120'
                }
            ]
        }
    },
    methods : {
        handleClick(){
            console.log(this.isSurplus)
            this.isSurplus = false;
        }
    }
}
</script>

<style lang='stylus' scoped>
    .ticketgroup
        background #fff
        margin-bottom .2rem
        .ticket-type
            height .88rem
            font-size .32rem
            color #333
            line-height .88rem
            text-indent .2rem
        .item 
            padding .24rem .2rem
            .item-title
                margin-right 1.8rem
                color #333
                line-height .48rem
                font-size .3rem
                display -webkit-box
                overflow hidden
                text-overflow ellipsis
                -webkit-line-clamp 2
                -webkit-box-orient vertical
            .ticket-type-price
                position absolute
                right .55rem
                font-size .24rem
                color #ff9800
                margin-top -.28rem
                top 50%
                line-height .4rem
                height .4rem
                .price-num
                    font-size .4rem
                    margin-left .04rem
                .ticket-numword
                    color #9e9e9e
                    font-size .24rem
            .ticket-extend
                position absolute
                top 50%
                margin-top -.24rem
                height .4rem
                line-height .4rem
                color #bbb
                font-size .24rem
                right .2rem
        .more-refresh
            height .8rem
            line-height .8rem
            text-align center
            .ticket-extend
                font-size .2rem
                color #616161
</style>
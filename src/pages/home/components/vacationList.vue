<template>
    <ul class="vacaList clearfix">
        <li class="item" v-for="(item, index) of dataCon" :key='index'>
            <p class="item-pimg"><img class="item-img" :src="item.imgUrl" alt=""></p>
            <p class="item-tilte">{{item.title}}</p>
            <p class="item-Price">￥<span>{{item.Price}}</span></p>
        </li>
    </ul>
</template>

<script>
export default{
    name : 'vacationList',
    props:['dataCon'],
    data (){
        return {

        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/mxmins.styl'
.vacaList
    margin 0 .2rem
.clearfix:after,.clearfix:before
    before()
.clearfix
    clearfix()
    .item
        width 49%
        float left
        margin-top .2rem
        .item-pimg
            width 100%
            height 1.5rem
            border-radius .05rem
            overflow hidden
            display flex
            align-items center
            justify-content center
            .item-img
                width 100%
        .item-tilte
            color #000
            font-size .28rem
            ellipsis()
            line-height .5rem
        .item-Price
            color:#ff7400
            font-size .3rem
            font-weight bold
    .item:nth-child(2n){
        padding-left 2%;
    }
</style>
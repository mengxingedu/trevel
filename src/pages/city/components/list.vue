<template>
    <div class="list" ref='wrapper'>
        <div>
            <div class="area">
                <div class="title border ">你的位置</div>
                <div class='areaList clearfix'>
                    <p class="dizi">{{this.cities}}</p> 
                </div>
            </div>
            <div class="area">
                <div class="title border" >热门城市</div>
                <div class='areaList clearfix'>
                    <p class="dizi" v-for="item of hotCities" :key='item.id' @click="handleCityClick(item.name)">{{item.name}}</p>  
                </div>
            </div>
            <div class="area" v-for='(item, key) of citiesChange' :key='key' :ref='key'>
                <div class="title border" >{{key}}</div>
                <ul>
                    <li class='zmlist' v-for='arr of item' :key='arr.id' @click="handleCityClickActions(arr.name)">{{arr.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default{
    name : 'CityList',
    props : {
        hotCities : Array,
        citiesChange : Object,
        letter : String
    },
    mounted (){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click : true
        })
    },
    methods : {
        handleCityClick (val){ //直接跳过Actions操作store里的数据
            //未使用映射的方式
            // this.$store.commit('increment', val);
            // this.$router.push('/')
            
            //使用MapMutations映射的方式
            // this.increment(val)
            // this.$router.push('/')

            //使用MapMutations映射的方式
            this.add(val)
            this.$router.push('/')

        },
        handleCityClickActions(val){ //使用Actions 操作commit进行修改store里的数据
            //未使用mapMutations映射的方式
            this.$store.dispatch('IisActions', val)
            this.$router.push('/')

        },
        ...mapMutations([
            'increment'  //将this.increment() 映射为 this.$store.commit('increment')
        ]),
        ...mapMutations({
            add : 'increment'
        })
    },
    computed : {
         ...mapState({
            cities : 'cities'
        })
    },
    watch :{
        letter (){
            if(this.letter){
                const ement = this.$refs[this.letter][0]
                this.scroll.scrollToElement(ement)
                // this.scroll.scrollToElement(ement,  2500)
            }
        }
    }   
}
</script>

<style lang='stylus' scoped> 
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mxmins.styl'

    .list
        position absolute
        top : 1.58rem
        left: 0
        right 0
        bottom 0
        overflow hidden
        .title
            font-size .26rem
            line-height .5rem
            height .5rem
            padding-left .2rem
            background  #eee
            border-bottom: .01rem solid #48484863
            border-top: .01rem solid #48484863
        .areaList
            padding .2rem .2rem 0
            overflow hidden
            .dizi
                padding .2rem
                border .02rem solid #eee
                text-align center
                float left
                width calc(94% / 3 - .4rem)
                margin-left 2%
                margin-bottom .2rem
            .dizi:nth-child(3n - 2)
                margin-left 0%
        .zmlist
            line-height .7rem
            height .7rem
            padding-left .2rem
            border-bottom  .01rem solid #48484863 
        .zmlist:last-child
            border none
</style>
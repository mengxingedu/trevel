<template>
    <div>
        <div class="search" >
            <input v-model='keyword' type="text" class="search-input" placeholder="请输入城市地址">
        </div>
        <div class="search-content"  ref='content' v-show='keyword'>
            <div>
                <ul >
                    <li class="search-item border-bottom" 
                        v-for='item of list' :key='item.id'>
                        {{item.name}}
                    </li>
                    <li class="search-item border-bottom" v-show='hasNoData'>没有找到匹配数据</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default{
    name : 'CitySearch',
    props : {
        cities : Object
    },
    data () {
        return {
            keyword : '',
            list : [],
            timer : null
        }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.content)
    },
    computed : {
        hasNoData (){
            return !this.list.length;
        }
    },
    watch : {
        keyword (){
            if(!this.keyword){
                this.list = [];
                return;
            }
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() =>{
                this.list = [];
                for (let i in this.cities){
                    // result.push(i)
                    this.cities[i].forEach( (value)=> {
                        if (value.spell.indexOf(this.keyword) >= 0 || value.name.indexOf(this.keyword) >= 0){
                            this.list.push(value)
                        }
                    })
                }
            }, 100)
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'
.search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
        box-sizing border-box
        width 100%
        height .62rem
        padding 0 .1rem
        line-height .62rem
        text-align center
        color #666
        border-radius .06rem
.search-content
    z-index 1
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
    background #eee
    .search-item
        line-height .62rem
        height .62rem
        font-size .3rem
        color #666
        text-indent .2rem
        background #fff
        // border-bottom .01rem solid #333;
</style>
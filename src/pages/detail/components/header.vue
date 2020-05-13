<template>
    <div class="Content">
        <router-link class="header-abs" v-show="isShowAbs" tag="div" to='/'>
            <span class="header-back iconfont">&#xe624;</span>
        </router-link>
        <div class="header" :style="opacityStyle">
            <router-link to='/' tag='p'><span class="header-back iconfont">&#xe624;</span></router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default{
    name : 'DetailHeader',
    data () {
        return{
            isShowAbs : true,
            opacityStyle : {
                opacity : 0
            }
        }
    },
    methods : {
        handleScroll (){
            console.log(document.documentElement.scrollTop)
            let top = document.documentElement.scrollTop;
            const opacity = top / 140;
            this.opacityStyle = {opacity}
            if(top > 60){
                this.isShowAbs = false
            }else{
                this.isShowAbs = true
            }
        }
    },
    activated (){
        console.log(123)
        window.addEventListener('scroll', this.handleScroll)
    },
    //页面即将被隐藏，或者页面被替换成新的页面的时候，这个生命周期钩子函数就被执行
    deactivated(){
        window.removeEventListener('scroll', this.handleScroll)
    }
    
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'

.Content
    position relative
    .header-abs
        position fixed
        z-index 10
        width  $HeaderHight
        height  $HeaderHight
        line-height  $HeaderHight
        border-radius 50%
        float left
        text-align center
        background rgba(0, 0, 0, .5)
        .header-back
            color #fff
    .header
        position fixed
        left 0
        right 0
        z-index 10
        height $HeaderHight
        line-height $HeaderHight
        color #fff
        text-align center
        overflow hidden
        background $bgColor
        font-size .3rem
        .header-back
            position absolute 
            left 0
            top 0
            width $HeaderHight
            font-size .35rem
            color #fff
</style>
<template>
    <ul class="list">
        <li class="item" 
            v-for='item of letters' :key='item' @click='handleLetter'
            :ref='item'
            @touchstart="handleTouchStart"
            @touchmove='handleTouchMove'
            @touchend='handleTouchEnd'
        >{{item}}</li>
    </ul>
</template>

<script>
export default{
    name : 'CityAlphabet',
    props : {
        cities : Object
    },
    data (){
        return {
            touchStartus : false,

        }
    },
    computed : {
        letters (){
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }
            return letters;
        }
    },
    methods : {
        handleLetter (e){
            this.$emit('change' ,e.target.innerText)
        },
        handleTouchStart(){//触摸开始
            this.touchStartus = true
        },
        handleTouchMove(e){//接触点滑动时
            if(this.touchStartus){
                const startY = this.$refs['A'][0].offsetTop;
                const touchY = e.touches[0].clientY - 79;  //79是审查头部的高度
                const index = Math.floor((touchY - startY) / 18.4);  //18.4是审查元素的高度
                if(index >= 0 && index < this.letters.length){
                    this.$emit('change', this.letters[index])
                }
                
            }
        },
        handleTouchEnd(){//接触结束，手指离开屏幕
            this.touchStartus = false
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute 
        top 1.58rem
        right 0
        bottom 0
        .item
            padding 0 0.1rem
            font-size .3rem
            line-height .38rem
            text-align center
            color : $bgColor
</style>
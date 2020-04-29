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
            startY : 0,
            timer : null , //滑动频率太大了，需要限制频率
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
    updated(){
        //当页面数据被跟新的时候，页面完成了自己的渲染
        this.startY = this.$refs['A'][0].offsetTop;
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
                // const startY = this.startY; //【因为定位了】拿到的就是这个元素距离祖宗元素顶部的距离，没有定位拿到的就是顶部距离body的距离
                
                //通过延迟定时器减少这个函数执行频率
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() =>{
                    const touchY = e.touches[0].clientY - 79;  //拿到的是浏览器顶部的距离 79是审查头部模块组件的高度，减去79就跟startY的的距离是一样的
                    //当前滑动的位置减去a距离顶部的距离算出差值，再除每个字母的高度就是所在的字母位置，
                    //18.4是每个元素的高度【这个差值除去每个字母的高度就可以算出每个字母的范围】
                    const index = Math.floor((touchY - this.startY) / 18.4);  
                    if(index >= 0 && index < this.letters.length){
                        this.$emit('change', this.letters[index])
                    }
                }, 16)
                
                
                
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
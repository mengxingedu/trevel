<template>
    <div>
        <div class="title">特惠度假</div>
        <ul class="clearfix">
            <li :class="['item', {focus : index == onIndex}]" @click='classOn(index)' v-for='(item, index) of classList' :key='index'>当季热门度假</li>
        </ul>
        <component :is='vacationList' :dataCon='thisData'></component>
    </div>
</template>

<script>
import vacationList from '../components/vacationList'
export default{
    name : 'scenicSpot',
    components:{
        vacationList
    },
    data (){
        return {
           classList : [
               {
                title : '当季热门度假'
               },
               {
                title : '今日特惠度假'
               }
           ],
           onIndex : 0,
           vacationList,
           thisData : {},
           thisDataList : [
                [
                    {
                        imgUrl : 'http://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
                        title : '含往返飞机票(含税)+5晚住宿',
                        Price :'3464'
                    },
                    {
                        imgUrl : 'http://imgs.qunarzz.com/sight/p0/1504/37/37bc07abdd1fdbee.water.jpg_256x160_061797a3.jpg',
                        title : '含往返飞机票(含税)+4晚住宿',
                        Price :'8580'
                    },
                    {
                        imgUrl : 'http://imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg',
                        title : '含往返飞机票(含税)+4晚住宿',
                        Price :'3380'
                    },
                    {
                        imgUrl : 'http://imgs.qunarzz.com/p/p29/201302/28/3d20251a1b60350a93835fbb.jpg_256x160_e8f468b0.jpg',
                        title : '含往返飞机票(含税)+6晚住宿',
                        Price :'4999'
                    }
                ],
                [
                    {
                        imgUrl : '//imgs.qunarzz.com/p/tts8/1809/ef/e725b9cd5f02ef02.jpg_r_480x320x95_678ac1d1.jpg',
                        title : '佛山-惠州 2天跟团游',
                        Price :'399'
                    },
                    {
                        imgUrl : '//imgs.qunarzz.com/vs_ceph_vs_tts/4f2fab6c-5bd6-49f3-b144-e2f5b0470aeb.jpg_180x120_7fda00b7.jpg',
                        title : '广州-桂林 5天跟团游',
                        Price :'2499'
                    },
                    {
                        imgUrl : '//imgs.qunarzz.com/vs_ceph_vs_tts/adf28d56-584b-41e2-89e1-d27e83fd0c65.jpg_180x120_830ccd50.jpg',
                        title : '广州-桂林 4天跟团游',
                        Price :'2059'
                    },
                    {
                        imgUrl : '//imgs.qunarzz.com/vs_ceph_vs_tts/41b9e526-bd64-4104-8fc0-1dead5273864.jpg_180x120_253a721b.jpg',
                        title : '广州-酒泉 5天跟团游',
                        Price :'3100'
                    }
                ]       
           ]
        }
    },
    methods : {
        classOn (val){
            this.onIndex = val
            this.thisData = this.thisDataList[val]
        }
    },
    computed : {
       
    },
    watch : {
        thisData (){
           return this.thisData = this.thisDataList[this.onIndex]
       }
    }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/mxmins.styl'
.clearfix:after,.clearfix:before
    before()
.clearfix
    clearfix()
.title
    color #26282a
    font-size .32rem
    font-weight bold
    text-indent .2rem
    margin-bottom .2rem
.item
    border .02rem solid #eee
    padding .13rem
    border-radius .1rem
    float left
    margin-left .2rem
.item.focus
    color #00ccdc
    border .02rem solid #00ccdc
</style>
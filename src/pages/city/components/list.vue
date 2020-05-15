<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border">你的位置</div>
        <div class="areaList clearfix">
          <p class="dizi">{{this.cities}}</p>
        </div>
      </div>
      <div class="area">
        <div class="title border">热门城市</div>
        <div class="areaList clearfix">
          <p
            class="dizi"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >{{item.name}}</p>
        </div>
      </div>
      <div class="area" v-for="(item, key) of citiesChange" :key="key" :ref="key">
        <div class="title border">{{key}}</div>
        <ul>
          <li
            class="zmlist"
            v-for="arr of item"
            :key="arr.id"
            @click="handleCityClickActions(arr.name)"
          >{{arr.name}}</li>
        </ul>
      </div>
    </div>

    <baidu-map  class="map" @ready="handler"></baidu-map>

    <thisPosition v-if="isShowAddress" :addressData='addressData' @cancel='canceltan' @handleclick_ok='set_address' :aaadfa='addressData' />
  </div>
</template>

<script>
import Vue from "vue";
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
import BaiduMap from "vue-baidu-map";
import thisPosition from '@/common/position/position'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: "cdySEojY0YpNjoraRGnH3dHV6Ryn0fg1"
});

export default {
  name: "CityList",
  data (){
    return {
      isShowAddress : false,
      addressData : ''
    }
  },
  props: {
    hotCities: Array,
    citiesChange: Object,
    letter: String
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    });
  },
  components : {
    thisPosition
  },
  methods: {
    handleCityClick(val) {
      //直接跳过Actions操作store里的数据
      //未使用映射的方式
      // this.$store.commit('increment', val);
      // this.$router.push('/')

      //使用MapMutations映射的方式
      // this.increment(val)
      // this.$router.push('/')

      //使用MapMutations映射的方式
      this.add(val);
      this.$router.push("/");
    },
    handleCityClickActions(val) {
      //使用Actions 操作commit进行修改store里的数据
      //未使用mapMutations映射的方式
      this.$store.dispatch("IisActions", val);
      this.$router.push("/");
    },
    ...mapMutations([
      "increment" //将this.increment() 映射为 this.$store.commit('increment')
    ]),
    ...mapMutations({
      add: "increment"
    }),

    canceltan (){
      this.isShowAddress = !this.isShowAddress
    },
    set_address (){
      this.increment(this.addressData)
      this.isShowAddress = !this.isShowAddress
    },

    handler({ BMap }) {
      let _this = this;
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() == 0) {
            if(_this.cities !== r.address.city){
              _this.isShowAddress = !_this.isShowAddress;
              _this.addressData = r.address.city;
              // console.log( _this.addressData)
              // _this.add(r.address.city);
            }
          } else {
            alert("failed" + this.getStatus());
          }
        },
        { enableHighAccuracy: true }
      );
    }
  },
  computed: {
    ...mapState({
      cities: "cities"
    })
  },
  watch: {
    letter() {
      if (this.letter) {
        const ement = this.$refs[this.letter][0];
        this.scroll.scrollToElement(ement);
        // this.scroll.scrollToElement(ement,  2500)
      }
    }
  }
};
</script>

<style lang='stylus' scoped>@import '~@/assets/styles/varibles.styl';
@import '~@/assets/styles/mxmins.styl';

.list {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  .title {
    font-size: 0.26rem;
    line-height: 0.5rem;
    height: 0.5rem;
    padding-left: 0.2rem;
    background: #eee;
    border-bottom: 0.01rem solid #48484863;
    border-top: 0.01rem solid #48484863;
  }

  .areaList {
    padding: 0.2rem 0.2rem 0;
    overflow: hidden;

    .dizi {
      padding: 0.2rem;
      border: 0.02rem solid #eee;
      text-align: center;
      float: left;
      width: calc(94% / 3 - 0.4rem);
      margin-left: 2%;
      margin-bottom: 0.2rem;
    }

    .dizi:nth-child(3n - 2) {
      margin-left: 0%;
    }
  }

  .zmlist {
    line-height: 0.7rem;
    height: 0.7rem;
    padding-left: 0.2rem;
    border-bottom: 0.01rem solid #48484863;
  }

  .zmlist:last-child {
    border: none;
  }

  .map {
    height: 100%;
    width: 100%;
  }
}
</style>
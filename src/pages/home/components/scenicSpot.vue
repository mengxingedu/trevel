<template>
  <div>
    <div class="title">特惠度假</div>
    <ul class="clearfix">
      <li
        :class="['item', {focus : index == onIndex}]"
        @click="classOn(index)"
        v-for="(item, index) of list"
        :key="index"
      >{{item.type}}</li>
    </ul>
    <component :is="vacationList" :dataCon="listData" v-if='list'></component>
  </div>
</template>

<script>
import vacationList from "../components/vacationList";
export default {
  name: "scenicSpot",
  props: {
    list: Array
  },
  data() {
    return {
      onIndex: 0,
      vacationList
    };
  },
  methods: {
    classOn(val) {
      this.onIndex = val;
    }
  },
  computed: {
    listData() {
        if(this.list[this.onIndex]){
            return this.list[this.onIndex].Datalist
        }else {
          return []
        }
        
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/mxmins.styl';

.clearfix:after, .clearfix:before {
  before();
}

.clearfix {
  clearfix();
}

.title {
  color: #26282a;
  font-size: 0.32rem;
  font-weight: bold;
  text-indent: 0.2rem;
  margin-bottom: 0.2rem;
}

.item {
  border: 0.02rem solid #eee;
  padding: 0.13rem;
  border-radius: 0.1rem;
  float: left;
  margin-left: 0.2rem;
}

.item.focus {
  color: #fff;
  background: #00ccdc;
  border: 0.02rem solid #00ccdc;
}
</style>
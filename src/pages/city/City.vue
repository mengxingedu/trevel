<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/list";
import CityAlphabet from "./components/Alphabet";
import axios from "axios";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      hotCities: null,
      cities: null,
      letter: ""
    };
  },
  mounted() {
    this.gitCityInfo();
  },
  methods: {
    gitCityInfo() {
      axios.get("/api/city.json").then(this.getCityInfoScoo);
    },
    getCityInfoScoo(res) {
      console.log(res);
      if (res.data && res.data.data && res.data.ret) {
        let data = res.data.data;
        this.hotCities = data.hotCities;
        this.cities = data.cities;
      }
    },
    handleLetterChange(letter) {
      this.letter = letter;
    }
  }
};
</script>

<style lang='stylus' scoped></style>
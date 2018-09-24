<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
      ...mapState(['city'])
  },
  // methods 是对象,不是函数
  methods: {
    getHomeData () {
      axios.get('/api/index.json?city='+this.city).then(this.getHomeDataSucc)
    },
    getHomeDataSucc (res) {
      const result = res.data
      const homeData = result.data
      if (result.ret && homeData) {
        this.swiperList = homeData.swiperList
        this.iconList = homeData.iconList
        this.recommendList = homeData.recommendList
        this.weekendList = homeData.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeData()
  },
  //使用keep-alive的时候,会多出来一个activated生命周期钩子
  activated () {
      if (this.lastCity !== this.city) {
          this.lastCity = this.city
          this.getHomeData()
      }
  }
}
</script>

<style scoped>

</style>

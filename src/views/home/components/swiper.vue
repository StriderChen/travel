<template>
  <div class="wapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id" v-if="isShowSwiper">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HmoeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
            el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },
  computed: {
    isShowSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  /*三个箭头表示样式穿透,不受scoped的影响*/
  .wapper >>> .swiper-pagination-bullet-active
    background: #ffffff
  .wapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 30.64%
    background: #ccc
    .swiper-img
      width: 100%
</style>

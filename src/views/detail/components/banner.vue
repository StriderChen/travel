<template>
    <div>
      <div class="banner" @click="handleBannerClick">
        <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1506/a5/86d690c56dacccafa530e230d593023a.water.jpg_600x330_5464a9b2.jpg"/>
        <div class="banner-info">
            <div class="banner-title">
                青海湖(AAAAA景区)
            </div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe691;</span>
                5
            </div>
        </div>
      </div>
      <common-gallary
          :imgs="imgs"
          v-show="showGallary"
          @close="handleGallaryClose"
      ></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
        showGallary: false,
        imgs: [
            'http://img1.qunarzz.com/sight/p0/1506/a5/86d690c56dacccafa530e230d593023a.water.jpg_r_800x800_a64f91a2.jpg',
            'http://img1.qunarzz.com/sight/p0/1506/c3/3ee72f3cc91fd222fc47d206ea6331ed.water.jpg_r_800x800_324c636f.jpg',
            'http://img1.qunarzz.com/sight/p0/1506/1a/8fd413455e912f106bdfd2abb6423288.water.jpg_r_800x800_971f828b.jpg',
            'http://img1.qunarzz.com/sight/p0/1506/e7/a41bf71681612460b84d2e341fd37476.water.jpg_r_800x800_b91775f9.jpg',
            'http://img1.qunarzz.com/sight/p0/1506/d1/0f01ba2b1d4b807a8afbcad490472694.water.jpg_r_800x800_d6bdda08.jpg'
        ]
    }
  },
  methods:{
    handleBannerClick () {
        this.showGallary = true
    },
      handleGallaryClose () {
          this.showGallary = false
      }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
.banner
    position: relative
    overflow: hidden
    height:0
    padding-bottom:55%
    .banner-img
        width:100%
    .banner-info
        display: flex
        position: absolute
        left:0
        right:0
        bottom:0
        line-height:.6rem
        color: #ffffff
        background-image: linear-gradient(top,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.8))
        .banner-title
            flex:1
            font-size:.32rem
            padding:0 .2rem
            text-align: left
        .banner-number
            height:.32rem
            line-height:.32rem
            margin-top: .14rem
            padding: 0 .4rem
            border-radius: .2rem
            background: rgba(0,0,0,.8)
            font-size:.24rem
            .banner-icon
                font-size:.24rem
</style>
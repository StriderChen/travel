<template>
    <div>
        <router-link
            tag="div"
            to="/"
            class="header-abs"
            v-show="showAbs"
        >
            <i class="iconfont header-abs-back">&#xe624;</i>
        </router-link>
        <div
            :style="opacityStyle"
            class="header-fixed"
            v-show="!showAbs"
        >
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
        showAbs: true,
        opacityStyle: {
            opacity: 0
        }
    }
  },
  methods: {
      handleScroll () {
          const top = document.documentElement.scrollTop
          if (top > 60) {
              let opacity = top / 140
              opacity = opacity > 1 ? 1 : opacity
              this.opacityStyle = {opacity}
              this.showAbs = false
          }else {
              this.showAbs = true
          }
      }
  },
  activated () {
    window.addEventListener('scroll',this.handleScroll)
  },
  // 解绑全局事件
  deactivated () {
    window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
    @import "~style/varibles.styl"
    .header-abs
        position: absolute
        left: .2rem
        top: .2rem
        width: .8rem
        height: .8rem
        line-height: .8rem
        border-radius: .4rem
        background: rgba(0,0,0,.4)
        .header-abs-back
            color: #ffffff
            font-size: .4rem
    .header-fixed
        z-index: 2
        position: fixed
        top: 0
        right: 0
        bottom: 0
        left: 0
        overflow: hidden
        height: .86rem
        line-height: .86rem
        color: #ffffff
        background: $bgColor
        font-size: .32rem
        .header-fixed-back
            width: .64rem
            text-align: center
            font-size: .4rem
            position: absolute
            top: 0
            left: 0
            color: #ffffff
</style>
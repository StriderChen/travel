<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul>
      <router-link
          tag="li"
          class="item border-bottom"
          v-for="item of recommendList"
          :key="item.id"
          :to="'/detail/'+item.id"
      >
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~style/mixin.styl"
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-align: left
    font-weight:bold
    text-indent: .2rem
  .item
    display: flex
    height: 1.9rem
    overflow: hidden
    .item-img
      height: 1.7rem
      width: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      min-width: 0
      text-align: left
      padding: .1rem
      .item-title
        line-height: .54rem
        font-size: .32rem
      .item-desc
        line-height: .4rem
        color: #aaa
        ellipse()
      .item-button
        line-height: .36rem
        margin-top: .13rem
        background: #FFBE1F
        color: #ffffff
        padding: .06rem .2rem
        -webkit-border-radius: .1rem
        -moz-border-radius: .1rem
        border-radius: .1rem
</style>

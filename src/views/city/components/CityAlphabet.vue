<template>
<ul class="list">
    <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
</ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props:{
      cities:Object
  }
}
</script>

<style lang="stylus" scoped>
    @import "~style/varibles.styl"
    .list
        display:flex
        flex-direction: column
        justify-content center
        position: absolute
        width:.4rem
        right:0
        top:1.58rem
        bottom:0
        .item
            line-height:.44rem
            color: $bgColor
</style>
<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
    @import "~style/varibles.styl"
    .header
        position: relative
        overflow: hidden
        height: .86rem
        line-height: .86rem
        color: #ffffff
        background: $bgColor
        font-size: .32rem
        .header-back
            width: .64rem
            text-align: center
            font-size: .4rem
            position: absolute
            top: 0
            left: 0
            color: #ffffff
</style>
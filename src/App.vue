<template>
    <div id="app">
        <!--<div id="nav">
            <router-link to="/">Home</router-link>
            <router-view/>
        </div>-->
        <!--显示当前路由地址所对应的内容-->
        <!--keep-alive 标签,对所有的路由做缓存,exclude="detail"表示不对detail做缓存-->
        <keep-alive exclude="detail">
            <router-view/>
        </keep-alive>
    </div>
</template>
<style lang="stylus">
    #app
        font-family 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        text-align center
        color #2c3e50

    #nav
        padding 30px
        a
            font-weight bold
            color #2c3e50
            &.router-link-exact-active
                color #42b983
</style>

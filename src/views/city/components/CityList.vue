<template>
    <div class="list" ref="cityList">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">
                            广州
                        </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
                        <div class="button">
                            {{item.name}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item":key="innerItem.id">
                        {{innerItem.name}}
                    </div>
                </div>

            </div>
        </div>
        <!-- 弹出层 -->
        <transition name="fade">
            <div class="toast" v-show="showToast">
                <span class="letter">{{this.letter}}</span>
            </div>
        </transition>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: 'CityList',
        data () {
            return {
                showToast: false
            }
        },
        props:{
            hotCities:Array,
            cities:Object,
            letter:String
        },
        methods: {
            changeToast () {
                this.showToast = true
                if(this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(()=>{
                    this.showToast = false
                },500)
            }
        },
        mounted () {
            this.scroll = new BScroll(this.$refs.cityList)
        },
        watch :{
            letter (){
                if (this.letter) {
                    const element = this.$refs[this.letter][0]
                    this.scroll.scrollToElement(element)
                    this.changeToast()
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~style/varibles.styl"
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .border-bottom
        &:before
            border-color: #ccc
    .list
        overflow: hidden
        position: absolute
        top:1.58rem
        right: 0
        bottom: 0
        left:0
        .title
            line-height: .54rem
            background: #eee
            padding-left: .2rem
            color: #666
            font-size: .32rem
            text-align: left
        .button-list
            overflow: hidden
            padding: .1rem .4rem .1rem .1rem
            .button-wrapper
                float: left
                width: 33.33%
                .button
                    margin: .1rem
                    padding: .1rem 0
                    text-align: center
                    border: .02rem solid #ccc
        .item-list
            .item
                line-height:.76rem
                color: #666
                text-align: left
                padding-left:.2rem
    .toast
        position fixed
        top 50%
        left 50%
        transform translate(-50%,-50%)
        z-index 10
        width 50px
        height 50px
        background $bgColor
        border-radius 50%
        text-align center
        transition all 0.5s
        &.fade-enter
            opacity 0
        &.fade-leave,&.fade-enter-active
            opacity 1
        &.fade-leave-active
            opacity 0
        .letter
            line-height 50px
            font-size 16px
            font-weight 700
            color #eee
</style>
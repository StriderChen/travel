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
            <div class="area" v-for="(item,key) of cities" :key="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item":key="innerItem.id">
                        {{innerItem.name}}
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: 'CityList',
        data: ()=>{
              // thisHotCities:this.hotCities,
              // thisCities:this.cities
        },
        props:{
            hotCities:Array,
            cities:Object
        },
        mounted () {
            var me = this
            this.scroll = new BScroll(this.$refs.cityList)
        }
    }
</script>

<style lang="stylus" scoped>
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

</style>
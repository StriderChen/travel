<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom"
                    v-for="item of list"
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                >
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">
                    没找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    import { mapMutations } from 'vuex'
    export default {
        name: 'CitySearch',
        props: {
            cities: Object
        },
        data () {
            return {
                keyword: '',
                list: [],
                timer: null
            }
        },
        methods :{
            handleCityClick (city) {
                //可以不需要调用actions,可以直接调用mutations
                //this.$store.dispatch('changeCity',city)
                //this.$store.commit('changeCity',city)

                //通过展开运算符将store中的属性映射到当前组件的methods中,
                // 即可直接用,不需要像上面那样写那么长去调用
                this.changeCity(city)
                this.$router.push('/')
            },
            ...mapMutations(['changeCity'])
        },
        computed: {
            hasNoData () {
                !this.list.length
            }
        },
        watch: {
            keyword () {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    const result = []
                    for (let i in this.cities) {
                        this.cities[i].forEach((value) => {
                            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                                result.push(value)
                            }
                        })
                    }
                    this.list = result
                }, 120)
            }
        },
        mounted () {
            this.scroll = new Bscroll(this.$refs.search)
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~style/varibles.styl"
    .search
        height: .72rem
        padding: 0 .1rem
        background: $bgColor
        .search-input
            box-sizing: border-box
            width: 100%
            height: .62rem
            padding: 0 .1rem
            line-height: .62rem
            text-align: center
            border-radius: .06rem
    .search-content
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        z-index: 1
        background: #eee
        overflow: hidden
        .search-item
            line-height: .62rem
            padding-left: .2rem
            text-align: left
            background: #ffffff
            color: #666
</style>
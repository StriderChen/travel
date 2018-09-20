<template>
    <ul class="list">
        <li
                class="item"
                v-for="item of letters"
                :key="item"
                :ref="item"
                @click="handleLetterClick"
                @touchstart="handleTouchStart"
                @touchmove="handleTouchMove"
                @touchend="handleTouchEnd"
        >
            {{item}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'CityAlphabet',
        props: {
            cities: Object
        },
        computed: {
            letters() {
                const letters = []
                for (let i in this.cities) {
                    letters.push(i)
                }
                return letters
            }
        },
        data() {
            return {
                touchStatus: false
            }
        },
        methods: {
            handleLetterClick(e) {
                this.$emit('change', e.target.innerText)
            },
            handleTouchStart() {
                this.touchStatus = true
            },
            handleTouchMove(e) {
                if (this.touchStatus) {
                    const startY = this.$refs['A'][0].offsetTop
                    const touchY = e.touches[0].clientY - 79
                    const index = Math.floor((touchY-startY)/20)
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('change',this.letters[index]);
                    }
                }
            },
            handleTouchEnd() {
                this.touchStatus = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~style/varibles.styl"
    .list
        display: flex
        flex-direction: column
        justify-content center
        position: absolute
        width: .4rem
        right: 0
        top: 1.58rem
        bottom: 0
        .item
            line-height: .44rem
            color: $bgColor
</style>
<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
    import DetailBanner from './components/banner'
    import DetailHeader from './components/Header'
    import DetailList from './components/List'
    export default {
        name: 'detail',
        components: {
            DetailBanner,
            DetailHeader,
            DetailList
        },
        data () {
            return {
                list: [{
                    id: 121,
                    title: '学生票',
                    children:[{
                        id:1211,
                        title:'学生一馆联票'
                    },{
                        id:1212,
                        title:'学生二馆联票'
                    },{
                        id:1213,
                        title:'学生三馆联票'
                    }]
                },{
                    id: 122,
                    title: '成人票'
                },{
                    id: 123,
                    title: '儿童票',
                    children:[{
                        id:1231,
                        title:'儿童套餐一'
                    },{
                        id:1232,
                        title:'儿童套餐二',
                        children:[{
                            id:12321,
                            title:'欢乐儿童套餐'
                        }]
                    }]
                },{
                    id: 124,
                    title: '特惠票'
                }]
            }
        },
        mounted () {
        }
    }
</script>

<style lang="stylus" scoped>
    .content
        height:50rem
</style>
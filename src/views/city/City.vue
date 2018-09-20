<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotCities="hotCities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
    import axios from 'axios'
    import CityHeader from './components/Header'
    import CitySearch from './components/CitySearch'
    import CityList from './components/CityList'
    import CityAlphabet from './components/CityAlphabet'

    export default {
        name: 'City',
        data () {
            return{
                cities: {},
                hotCities: []
            }
        },
        components: {
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        methods: {
            getCityData() {
                axios.get('/api/city.json').then(this.handleCityData)
            },
            handleCityData(response) {
                let resData = response.data;
                if(resData.ret && resData.data){
                    const data = resData.data
                    this.cities = data.cities
                    this.hotCities = data.hotCities
                }
            }
        },
        mounted() {
            this.getCityData()
        }
    }
</script>

<style lang="stylus" scoped>

</style>
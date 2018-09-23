<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list
           :cities="cities"
           :hotCities="hotCities"
           :letter="letter"
        ></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
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
                hotCities: [],
                letter:''
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
            handleCityData (response) {
                let resData = response.data;
                if(resData.ret && resData.data){
                    const data = resData.data
                    this.cities = data.cities
                    this.hotCities = data.hotCities
                }
            },
            handleLetterChange (letter) {
                this.letter=letter
            }
        },
        mounted() {
            this.getCityData()
        }
    }
</script>

<style lang="stylus" scoped>

</style>
//避免某些浏览器抛出异常
let defaultCity = '信宜'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {}

export default {
    city: defaultCity
}
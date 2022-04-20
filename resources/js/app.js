require('./bootstrap');

window.Vue = require('vue').default;



Vue.component('Covertidor', () => import("./components/ConvertidorComponent"));

const app = new Vue({
    el: '#app',


});

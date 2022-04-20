require('./bootstrap');

window.Vue = require('vue').default;



Vue.component('Covertidor', () => import("./components/ConvertidorComponent"));
Vue.component('Fixer', () => import("./components/FixerComponent"));

const app = new Vue({
    el: '#app',
});

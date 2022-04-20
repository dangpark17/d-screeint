require('./bootstrap');

window.Vue = require('vue').default;



Vue.component('Covertidor', () => import("./components/ConvertidorComponent"));
Vue.component('Fixer', () => import("./components/FixerComponent"));
Vue.component('Banxico', () => import("./components/BanxicoComponent"));

const app = new Vue({
    el: '#app',
});

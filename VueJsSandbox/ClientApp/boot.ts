import Vue from 'vue';
import VeeValidate from 'vee-validate';
import esPromise from 'es6-promise';
import App from './components/app/app';

esPromise.polyfill();
Vue.use(VeeValidate);

var helloWorldVm = new Vue({
    el: '#myApp',
    components: {App}
    //render: h => h(require('./components/app/app.vue'))
    //render: h => h(require('./components/form/form'))
});
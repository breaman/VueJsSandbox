import Vue from 'vue';
import VeeValidate from 'vee-validate';
import esPromise from 'es6-promise';

esPromise.polyfill();
Vue.use(VeeValidate);

var helloWorldVm = new Vue({
    el: '#myApp',
    render: h => h(require('./components/form/form.vue'))
});
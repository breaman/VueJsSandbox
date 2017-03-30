import Vue from 'vue';

var helloWorldVm = new Vue({
    el: '#myApp',
    render: h => h(require('./components/app/app.vue'))
});
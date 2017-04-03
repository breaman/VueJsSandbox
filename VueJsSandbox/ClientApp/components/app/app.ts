import Vue from 'vue';
import { Component } from 'av-ts';

@Component({
    template: '#form-template'
})
export default class CounterComponent extends Vue {
    currentCount: number = 0;

    incrementCounter() {
        this.currentCount++;
    }
}
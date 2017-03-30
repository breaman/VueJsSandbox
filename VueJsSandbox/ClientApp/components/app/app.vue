<template>
    <div class="row">
        <div class="col-sm-12">
            <h1>Counter</h1>
            <p>This is a simple example of a Vue.js component.</p>
            <p>Current count: <strong>{{currentCount}}</strong></p>
            <button @click="incrementCounter">Increment</button>
        </div>
    </div>
</template>

<script src="./app.ts"></script>
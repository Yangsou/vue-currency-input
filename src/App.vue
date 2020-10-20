<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <CurrencyInput v-model="cost" @change="changeCost" @focus="focusCost" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CurrencyInput from './vue-currency-input/vue-currency-input.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    CurrencyInput
  },
  data: () => {
    return {
      cost: ''
    }
  },
  methods: {
    changeCost(e) {
      console.log('changeCost', e);
    },
    focusCost() {
      console.log('focusCost', this.cost);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

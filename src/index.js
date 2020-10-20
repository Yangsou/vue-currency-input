import VueCurrencyInput from './vue-currency-input/vue-currency-input.vue';

VueCurrencyInput.install = (Vue) => {
  Vue.component(VueCurrencyInput.name, VueCurrencyInput);
};

export {
  VueCurrencyInput
};
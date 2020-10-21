<template>
  <input
    class="currency-input"
    v-bind:class="{'currency-input-disble': disabled}"
    type="text"
    ref="input"
    :disabled="disabled"
    :placeholder="placeholder"
    :value="value"
    @keyup="keyupNative"
    @blur="blur"
    @change="change"
    @focus="focus"
  />
</template>
<script>
import { formatCurrency } from './helper';

export default {
  name: 'VueCurrencyInput',
  props: {
    value: [String, Number],
    maxValue: Number,
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  methods: {
    keyupNative(e) {
      this.format(e.target);
    },
    blur(e) {
      this.format(e.target, 'blur');
    },
    focus(e) {
      this.$emit('focus', e);
    },
    change(e) {
      this.$emit('change', formatCurrency(e.target.value));
    },
    format(input, blur = '') {
      // appends $ to value, validates decimal side
      // and puts cursor back in right position.

      // get input value
      let inputVal = input.value.replace(/,/g, '');

      if ((this.$props.maxValue && Number(inputVal) > this.$props.maxValue) || this.$props.maxValue === 0) {
      input.value = '0';

      return;
      }

      // don't validate empty input
      if (inputVal === '') { return; }

      // original length
      const originalLen = inputVal.length;

      // initial caret position 
      // let caretPos = input.prop('selectionStart');
      let caretPos = input.selectionStart;

      inputVal = formatCurrency(inputVal);

      if (blur === 'blur') {
      inputVal = formatCurrency(inputVal);
      }
      // send updated string to input
      input.value = inputVal;
      this.$emit('update:value', inputVal);

      // put caret back in the right position
      const updatedLen = inputVal.length;
      caretPos = updatedLen - originalLen + caretPos;
      input.setSelectionRange(caretPos, caretPos);
    }
  }
};
</script>
<style scoped>
  .currency-input {
    height: 32px;
    line-height: 32px;
    padding: 0 8px;
    border-radius: 4px;
    border: 1px solid #bebebe;
  }
  .currency-input:focus,
  .currency-input:visited {
    border-color: #2ea2f8;
  }
</style>
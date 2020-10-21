# vue-currency-input

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### How to use
main.js
```javascript
import Vue from 'vue'
import VueCurrencyInput from '@trungnam/vue-currency-input';

Vue.use(VueCurrencyInput.VueCurrencyInput);
```

template
```html
<vue-currency-input />
```

## Events

|key|description|params|
|:---|---|---|
| `change`|triggers only when the input box loses focus|`value: String`|
| `focus`|triggers when Input focuses	|`e: Event`|
| `blur`|triggers when Input blurs	|`e: Event`|


### Attributes

|key|description|type|default|
|:---|---|---|---|
|disabled|whether Input is disabled|`Boolean`|`false`|
|placeholder|the placeholder of Input|`String`|""|
|maxValue|the maximum value of Input|`Number`|`undefined`|

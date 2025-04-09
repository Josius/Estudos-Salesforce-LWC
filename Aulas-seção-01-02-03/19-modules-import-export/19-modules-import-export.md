# Modules Import Export
- precisa add **type="module"** no html
```html
<script type="module" src="src/script.js"></script>
```
- precisa de dois arquivos .js, um **utils.js** para manter os métodos reutilizáveis e outro para usá-los, p.e. **script.js**
### utils.js - p/exportar
```js
//Normal Export
export const PI = 3.14
export function add(a, b){
  console.log(a + b)
}
//Export Together
const PI = 3.14
function add(a, b){
  console.log(a + b)
}
export {PI, add}
//Export With Alias
const PI_DATA = 3.14
function add(a, b){
  console.log(a + b)
}
export {PI_DATA as PI, add}
//Export Default
export default function minus(a, b){
  console.log(a - b)
}

//Export All Methods
const PI_DATA = 3.14
function add(a, b){
  console.log(a + b)
}
export {PI_DATA as PI, add}
export function minus(a, b){
  console.log(a - b)
}
```
### script.js - p/importar
```js
//Normal Export
//Export Together
//Export With Alias
//Export Default
import minus, {PI, add} from './utils.js'
console.log(PI)
console.log(add(2, PI))

//Import All Methods
import * as UTILS from './utils.js'
console.log(UTILS.PI)
console.log(UTILS.add(2, PI))
console.log(UTILS.minus(2, 10))
```

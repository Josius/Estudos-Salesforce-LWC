# Arrow Function
- Modos de usar arrow function:
```js
// function
function abc(){
  console.log('hello')
}
abc()
// Arrow function - Mesma função que acima
const abc = () => console.log('hello')
abc()
// Arrow function
function sum(data){
  let sum = data + 10
  return sum
}
console.log(sum(4))
// com 1 argumento
const sum2 = data => {
  let sum2 = data + 10
  return sum2
}
console.log(sum2(3))
// com 2 argumentos
const sum3 = (data1, data2) => {
  let sum3 = data1 + data2 + 10
  return sum3
}
console.log(sum3(3, 5))
// sem return
const sum4 = (data1, data2) => data1 + data2 + 10
console.log(sum3(3, 5))
//usando com map
var arr = [1,2,3,4]
let newArr = arr.map((item) => item * 2)
console.log(newArr)
```
## Problema que arrow function resolve:
- métodos aninhados em um objeto perdem o contexto, veja *getName* e *fullName* abaixo:
```js
//Problema que Arrow Function resolve
let obj = {
  name: 'nikhil',
  getName:function(){
    console.log(this.name)
  }
}
obj.getName()
//o problema começa quando a função se torna um aninhamento
let obj2 = {
  name1: 'nikhil2',
  getName:function(){
    console.log(this.name1) //nikhil2
    function fullName(){
      console.log(this.name1) //undefined: perdeu o contexto
      console.log('my full name is ' + this.name1 + ' jkarek') //my full name is undefined jkarek: perdeu o contexto
    }
    fullName()
  }
}
obj2.getName()
```
- o problema é resolvido abaixo, permitindo que não se perca o contexto:
```js
//transformar método aninhado:
function fullName(){...
//em uma arrow function:
const fullName = () => {...
```
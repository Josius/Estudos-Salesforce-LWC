let element = document.querySelector('.abc')
console.log(element)//<div>Hello Everyone</div> - 1º element do tipo div
element.style.color='red'
let elementAll = document.querySelectorAll('div')
console.log(elementAll)//NodeList(3) [ div, div, div ] 0: <div>​ 1: <div>​ 2: <div> ​ length: 3 <prototype>: NodeListPrototype { item: item(), keys: keys(), values: values(), … }
//Como é uma lista, precisamos converter para um array; cada 'div' é um 'item'
Array.from(elementAll).forEach(function(item){
  item.style.color='green'
})
document.querySelector('.abc')
this.document.querySelector('.abc')
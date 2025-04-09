# Query Selector
- Usamos um seletor CSS, como nome do elemento (div), a classe ou o id (o qual não é recomendado)
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>First HTML page</title>
  </head>
  <body>
    <div class="abc">Hello Everyone</div>
    <div>Hello LWC Developers</div>
    <div>Hello Anybody</div>

    <script src="src/script.js"></script>
  </body>
</html>
```
- **Query Selector:** retorna 1º elemento que combina com um específico seletor CSS no documento
- **Query SelectorAll**: retorna todos elementos combinam com um específico seletor CSS no documento, não retorna array e sim lista de nós estáticos 
````js
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
```
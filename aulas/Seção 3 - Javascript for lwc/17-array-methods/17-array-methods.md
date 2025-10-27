# Array Methods
### Syntax
```js
	array.methodName(function(currentItem, index, actualArray){

	})
```
### map
- funciona como um loop que itera em cada valor do array alterando cada um para algo pré-determinado e retornando um array como resultado
	```js
	let arr = [2,3,5,7,9,10]
	let newArr = arr.map(function(currentItem, index, array){
		console.log(`currentItem is ${currentItem} - index ${index} - array ${array}`)
		return currentItem * 2
	})
	console.log(newArr)//[4, 6, 10, 14, 18, 20]
	```
### filter
- filtra valores no array com base em uma condição
	```js
	let arr = [2,3,5,7,9,10]
	let newArr = arr.filter(function(currentItem, index, array){
		return currentItem > 5
	})
	console.log(newArr)//[7, 9, 10]
	```
### every
- verifica cada valor no array se corresponde a um condição, se TODOS corresponderem, retorna true, do contrário, retorna false
	```js
	let newArr = age.every(function(currentItem, index, array){
		return currentItem > 18
	})
	console.log(newArr)//false
	```
### some
- semelhante ao every, mas neste caso é se houver ALGUM, no caso, se houver 1 único elemento que corresponda a condição, então retorna true
	```js
	let age = [32,33,18,40]
	let newArr = age.some(function(currentItem, index, array){
		return currentItem > 32
	})
	console.log(newArr)//true
	```
### sort
- organiza em ordem alfabética
	```js
	var names = ['nikil', 'smith', 'john']
	console.log(names.sort())//["john", "nikil", "smith"]
	```
- organiza números
	```js
	var points = [10,39,12,80,54]
	let sortedValue = points.sort(function(a, b){
		//return a-b //crescente: [10, 12, 39, 54, 80]
		return b-a // decrescente: [80, 54, 39, 12, 10]
	})
	console.log(sortedValue)
	```
### reduce
- sintaxe
	```js
	array.reduce(function(total, currentValue, index, array){

	}, inicalValue)
	```
- exemplo
	```js
	let num = [12,78,30]
	let sum = num.reduce(function(total, currentItem){
		return total + currentItem
	}, 0)
	console.log(sum)//120 = 12+78+30
	```
### forEach
- itera sobre os itens do array
	```js
	let num = [12,78,30]
		num.forEach(function(currentItem){
	console.log(currentItem)//12, 78, 30
	})
	```
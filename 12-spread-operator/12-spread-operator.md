# Spread Operator
 - formado por 3 pontos: **...**
 - converte string em um vetor
 - combina vetor ou add vlrs ao vetor
 - combina objetos ou add vlrs ao objeto
 - cria nova cópia superficial de vetores e objetos 
## Sobre vetores e objetos
### Vetores
- Relembrando:
	```js
	var arr = ['a', 'b', 'c'];
	console.log(arr); // (3) ["a", "b", "c"]
	console.log(arr[0]); // a
	arr.push('d') // add 'd' ao final do vetor
	console.log(arr); // (3) ["a", "b", "c", "d"]
	```
### Objetos
- Dentro das chaves com par-valor:
	```js
	var obj={
	'name': 'salesforce',
	'age': 23,
	'full name': 'zero to hero'// só pode ser acessada com array notation
	}
	console.log(obj.name);// salesforce - dot notation
	console.log(obj['age']);// 23 - array notation
	console.log(obj['full name']);// zero to hero - array notation
	obj.hobbies = 'RPG'; // add 'RPG' ao final do objeto
	console.log(obj);// (4) {name: "salesforce", age: 23, full name: "zero to hero", hobbies: "RPG"}
	```
## Usando Spread Operator
### Expanding of string
- convertendo uma string em um vetor de caracteres
	```js
	let greeting = 'Hello Everyone';
	let charList = [...greeting];
	console.log(charList);//(14) ["H", "e", "l", "l", "o", " ", "E", ...]
	```
### Combining array
- combinando valores de vetores em um
	```js
	let arr1 = ['amazon', 'google']
	let arr2 = ['facebook', 'instagram']
	let arr3 = [...arr1, ...arr2]
	console.log(arr3);//(4) ["amazon", "google", "facebook", "in...]
	```
### Add values to array
- add com spread operator
	```js
	let arr4 = ['a', 'b', 'c']
	let arr5 = [...arr4, 'niquel'] // add no final
	console.log(arr5)//(4) ["a", "b", "c", "niquel"]
	arr5 = ['nausea',...arr5] // add no início
	console.log(arr5)//(5) ["nausea", "a", "b", "c", "niquel"]
	```
### Combinação de objetos
- **OBS:** ao combinar, note que há preferência do objeto à direita sobre o objeto da esquerda, trocando assim seus valores (linha 59):
	```js
	let obj1 = {name:'salesforce',	age:23, date: '23/10/2000'}
	let obj2 = {name:'facebook',	age:55}
	let obj3 = {...obj1, ...obj2}//obj1 está à esquerda, e obj2 à direita
	console.log(obj3)//(3) {name: "facebook", age: 55, date: "23/10/2000"}
	```
### Shallow Copy (cópia superficial)
- problema ao referenciar uma variável a outra:
	```js
	var arr10 = ['x', 'y', 'z']
	arr10.push(20)
	console.log(arr10)//(4) ["x", "y", "z", 20]

	var arr11 = arr10//arr11 recebe referencia de arr10
	arr11.push('arroba')//altera as duas variáves arr10 e arr11
	console.log(arr10)//(5) ["x", "y", "z", 20, "arroba"]
	console.log(arr11)//(5) ["x", "y", "z", 20, "arroba"]
	```
- evitando esse erro:
	```js
	var arr10 = ['x', 'y', 'z']
	arr10.push(20)
	console.log(arr10)

	var arr11 = [...arr10]
	arr11.push('arroba')//altera somente variável arr10
	console.log(arr10)//(5) ["x", "y", "z", 20]
	console.log(arr11)//(5) ["x", "y", "z", 20, "arroba"]
	```
### Nested Copy (cópia aninhada) - NÃO FUNCIONA DIRETAMENTE
- os valores são atualizados, pois é uma estrutura de 2 níveis, pois há um array (1º nvl) de objetos (2º nvl), logo, Shallow Copy só funciona em uma estrutura de 1 nível:
	```js
	var arrObj = [
		{name:'arroba'},
		{name:'salesforce'}
	]
	var arrObjCopy = [...arrObj]
	console.log(arrObjCopy)//(2) [{name: "teste"}, {name: "salesforce"}]
	arrObjCopy[0].name = 'teste'//[0] -> 1º nvl - .name -> 2º nvl
	console.log(arrObjCopy)//(2) [{name: "teste"}, {name: "salesforce"}]
	console.log(arrObj)//(2) [{name: "teste"}, {name: "salesforce"}]
	```
### Nested Copy (cópia aninhada) - FUNCIONA COM MÉTODOS JSON
- usando métodos:
	```js
	var arrObj = [
		{name:'arroba'},
		{name:'salesforce'}
	]
	var arrObjCopy = JSON.parse(JSON.stringify(arrObj))
	arrObjCopy[0].name = 'teste'
	console.log(arrObjCopy)//(2) [{name: "teste"}, {name: "salesforce"}]
	console.log(arrObj)//(2) [{name: "arroba"}, {name: "salesforce"}]
	```
# Destructuring - desestruturação
### Array Destructuring
- desestruturando vetor:
	```js
	let arr = ['amazon', 'google']
	let [comp0, comp1, comp2] = arr
	console.log(comp0)//amazon
	console.log(comp1)//google
	console.log(comp2)//undefined
	```
### Object Destructuring
- desestruturando objeto:
	```js
	let options = {
		title:'human',
		age:23,
		type:'CRM'
	}
	let {title, age, type} = options
	console.log(title)//human
	console.log(age)//23
	console.log(type)//CRM
	```

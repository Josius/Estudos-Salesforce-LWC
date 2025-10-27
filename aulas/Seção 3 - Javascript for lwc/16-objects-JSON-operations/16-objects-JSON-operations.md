# Objects/JSON Operations
### Objects
- Possiveis usos de **keys** e **values**:  *se houver um Object SF muito gde e quer ter certeza de que determinado campo existe ou não, ou se quer fazer um loop no Object SFA*
  - **Objects.keys:** extrai tds atributos/chaves do objeto no formato de vetor
	```js
	let obj={
		name:'Salesforce',
		age:23,
		dob:'23/10/1990'
	}
	console.log(Object.keys(obj))//(3) ["name", "age", "dob"]
	```
  - **Objects.values:** extrai tds valores de atributos/chaves do objeto no formato de vetor.
	```js
	let obj={
		name:'Salesforce',
		age:23,
		dob:'23/10/1990'
	}
	console.log(Object.values(obj))//(3) ["Salesforce", 23, "23/10/1990"]
	```
### JSON
- JSON é uma forma de objeto:
  - **JSON.stringify:** converter JSON em string
	```js
	let obj={
		name:'Salesforce',
		age:23,
		dob:'23/10/1990'
	}
	console.log(JSON.stringify(obj))//{"name":"Salesforce","age":23,"dob":"23/10/1990"}
	```
  - **JSON.parse:** converter string em objeto JSON
	```js
	let obj={
		name:'Salesforce',
		age:23,
		dob:'23/10/1990'
	}
	let str = JSON.stringify(obj)
	console.log(JSON.parse(str))//(3) {name: "Salesforce", age: 23, dob: "...}
	```
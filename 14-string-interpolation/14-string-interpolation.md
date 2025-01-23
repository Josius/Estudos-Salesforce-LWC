# String Interpolation
- o que podemos fazer SEM erro:
	```js
	var name1 = 'Sales'
	var name2 = 'force'
	var age = 23
	var str = 'my name is ' + name1+name2 + ' and my age is ' + age
	console.log(str)//my name is Salesforce and my age is 23
	```
- o que podemos fazer COM erro:
	```js
	var a = 2
	var b = 3
	var str1 = 'the sum of ' + a + ' and ' + b + ' is ' + a+b
	console.log(str1)//the sum of 2 and 3 is 23
	```
- com string string interpolation:
	```js
	var name1 = 'Sales'
	var name2 = 'force'
	var age = 23
	console.log(`my name is ${name1+name2} and my age is ${age}`)//my name is Salesforce and my age is 23
	var a = 2
	var b = 3
	var str1 = `the sum of ${a} and ${b} is ${a+b}`
	console.log(str1)//the sum of 2 and 3 is 5
	```
- e ao receber um id dinâmico:
	```js
	var recordid = '954831567dscfr522'
	console.log(`http://salesforce.com/${recordid}`)//http://salesforce.com/954831567dscfr522
	```
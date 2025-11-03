# Null VS Undefined
## Operador de Igualdade
### Comparação Normal
- **==** compara apenas o valor 
	```js
	console.log(3==3); //true
	console.log("niki"=="niki"); //true
	console.log("niki"=="NIKI"); //false
	console.log(3=="3"); //true
	```
### Comparação Estrita
- **===** compara o valor e tipo das variáveis
	```js
	console.log(3===3); //true
	console.log("niki"==="niki"); //true
	console.log("niki"==="NIKI"); //false
	console.log(3==="3"); //false
	```
## Null VS Undefined
- **Undefined:** variável declarada mas não inicializada, JS atribuí **undefined** a ela
- **Null:** valor **desconhecido** atribuido a uma variável
	```js
	var x;
	console.log(x); //undefined
	var y = null;
	console.log(y); //null
	
	console.log(x == y); //(1) true
	console.log(x === y); //(2) false
	```  
- em (1), **undefined** tmb é vlr **desconhecido**
- em (2), *x* é do tipo **undefined** e *y* é do tipo **object**
- não atribuímos **undefined** a uma variável, e sim o valor **null**
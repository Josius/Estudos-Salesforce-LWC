# Data Types
### number
- tipo **number** tem um limite de +2^(253)-1 e -2^(253)-1
	```js
	var x = 10;
	console.log(typeof x); //imprime o tipo da variável (number)
	console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
	```
### bigint
- para criar um bigint basta add um n ao número
	```js
	var x = 10n;
	console.log(typeof x); //imprime o tipo da variável (bigint)
	```
### string
- pode-se usar '' ou ""
	```js
	var name = 'name um';
	console.log(typeof name); //imprime o tipo da variável (string)
	var name = "name dois";
	console.log(typeof name); //imprime o tipo da variável (string)
	```
### boolean
- não se usa '' ou "" como em outras linguagens
	```js
	var booleana = true;
	console.log(typeof booleana); //imprime o tipo da variável (boolean)
	```
### undefined
- para uma variável não inicializada
	```js
	var x;
	console.log(typeof x); //imprime o tipo da variável (undefined)
	```
### object
- para criar um objeto:
- vetores/array são um tipo de objeto indireto
	```js
	var obj={};
	console.log(typeof obj); //imprime o tipo da variável (object)
	var arr=[];
	console.log(typeof arr); //imprime o tipo da variável (object)
	```
## symbol
- usado como identificador exclusivo
	```js
	var sym = Symbol.("id");
	console.log(typeof sym); //imprime o tipo da variável (symbol)
	```
## null
- valor desconhecido, usado para alterar o valor de uma variável para nula
	```js
	var x = 10;
	x = null;
	console.log(typeof x); //imprime o tipo da variável (object)
	```
**OBS:** imprime como *object* mas é *null*, não consertam isso no JS
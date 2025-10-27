# Variáveis
- 3 tipos: **const, let** e **var**
- case sensitive

### VAR
- pode ser atualizada(1) e redeclarada(2)
	```js
	//(1)
	var course = "test 00";
	course = "test 01";
	//(2)
	var course = "test 10";
	```
- 2 tipos de escopo: **global** e **função** (1)
	```js
	//(1)
	function abc() {
		var course = "test 00";
		console.log(course);
	}
	abc(); //imprime vlr do console pq está chamando a função
	console.log(course); //ñ imprime valor da variável dentro da função
	```
- não suporta escopo de **bloco**: qlqr escopo q começa e termina com *{}*, p.e. **if** (1); abaixo vai 
- 
	```js
	//(1)
	if(2==2) {
		var course = "test 00";
	}
	console.log(course); //imprime console pq JS entende que está em escopo global, mas o certo seria não imprimir, pois está em escopo de bloco
	```

### LET
- pode ser atualizada (1)
- **NÃO** pode ser e redeclarada (2)
- 2 tipos de escopo: **função**(4) e **bloco**(5)
- **NÃO** suporta escopo **global** (3)
	```js
	let course = "test 00";
	course = "teste 11"; //(1)
	let course = "test 00" //(2) NÃO REDECLARA VARIÁVEL
	console.log(course);
	console.log(window.course); //(3) NÃO IMPRIME(undefined)

	//(4)
	function abc() {
		let x = "hill";
		console.log(x);
	}
	abc(); //imprime valor da variável dentro da função
	console.log(x); //NÃO imprime valor da variável dentro da função

	//(5)
	if(2==2) {
		let y = "y";
		console.log(y); //imprime
	}
	console.log(y); //NÃO IMPRIME(is not defined)
	```

### CONST
- **NÃO** pode ser atualizada
- **NÃO** pode ser e redeclarada
- 3 tipos de escopo: **função**, **bloco** e **global**

**OBS 1:** escopo global também pode ser escopo de janela (*windows scope*), o qual pode ser acessado com **console.log(window.nome_da_variável)**
**OBS 2:** em LWC não usamos **var**, mas sim **let** e **const**
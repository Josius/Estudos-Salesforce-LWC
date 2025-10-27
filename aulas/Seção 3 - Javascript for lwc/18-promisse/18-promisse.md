# Promisse
## Características
- Objetos que podem produzir um único valor em algum momento no futuro
- Usados em operações assíncronas
- Geralmente prometem retornos
- 3 estados:
  - pending
  - fulfilled
  - rejected
- Usos de caso no LWC:
  - buscando dados no servidor
  - carregando arquivo do sistema
## Syntax
```js
new Promise(function(resolve, reject){
  return resolve('success')
})
```
## Exemplos
### Simples
- O 1º *console.log* retorna o objeto promisse completo, logo precisamos pegar os valores dentro desse objeto usando o método **then**; com isso o 2º *console.log* retorna o único valor da promisse
- Se acaso o valor de *data* não condizer com o if, a promisse retorna o else e pegamos esse valor com o método **catch** e printamos no 3º *console.log*
```js
function checkIsSuccess(data){
	return new Promise(function(resolve, reject){
		if(data === "success"){
			return resolve("successfully executed")
    } else {
		return reject("unsuccessfully executed")
    }
  })
}
console.log(checkIsSuccess("success"))//Promise {}
checkIsSuccess("success").then(function(result){
	console.log(result)//successfully executed
}).catch(function(error){
	console.log(error)//unsuccessfully executed
})
```
### Buscando dados na api do github e imprimindo-os
```js
fetch('https://api.github.com/users/Josius').then(function(result){
  console.log(result)//Response {}
  return result.json()
}).then(function(response){
  console.log(response)//{login: "Josius", id: 58814756, node...}
})
//fetch: método que busca os dados no servidor pela URL - assíncrono e promisse - retorna o fluxo de dados, outras promisses
//json: método que retorna outra promisse mas converte para json
```
- **then:** recebe os dados
- **catch:** captura os erros

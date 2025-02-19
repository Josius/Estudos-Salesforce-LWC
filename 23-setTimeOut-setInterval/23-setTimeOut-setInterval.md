# setTimeout vs setInterval
## setTimeout
```js
// setTimeout
// armazena o id e depois de 2 segundos executa o console log
let timerId = window.setTimeout(function(){
  console.log('hello')
}, 2000)
console.log(timerId)
// limpa o tempo limite ao passar o id do setTimeout, logo, como js é lido de baixo para cima, não imprime o console log 
clearTimeout(timerId)
```
```js
// setTimeout
// armazena o id e depois de 2 segundos executa o console log
let timerId = window.setTimeout(function(){
  console.log('hello')
}, 2000)
console.log(timerId)
// limpa o tempo limite ao passar o id do setTimeout, logo, como js é lido de cima para baixo antes de 2 segundos, não imprime o console log 
clearTimeout(timerId)
```
## setInterval
- útil quando você deseja executar uma tarefa repetitiva várias vezes após um determinado tempo
```js
// setInterval
let intervalId = window.setInterval(function(){
  console.log('hello')
}, 1000)
clearInterval(intervalId) // interrompe o método
```
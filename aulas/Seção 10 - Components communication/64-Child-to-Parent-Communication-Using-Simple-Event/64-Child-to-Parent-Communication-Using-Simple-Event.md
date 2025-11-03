# Child to Parent Communication Using Simple Event
- Neste exemplo, criamos um html filho modal que é incluido no html pai, chamamos o html filho é aberto, clicamos em um botão que passa um simple-event para o html pai, fechando o modal
### Componente filho
- ao clicar no botão é chamado um evento; em onclick o método que está no componente pai para fechar o modal
- ao criar um evento customizado, não usar *'on'* no prefixo do nome do evento, pois é usado no custom event do html, usar somente letras minúsculas e sem espaço
- veja também que o evento que estamos enviado/despachando é o *close*, no html ele ouvirá esse event como *onclose*
```html
<button class="slds-button slds-button_brand" onclick={closeHandler}>Ok</button>
```
```js
closeHandler(){ 
	const myEvent = new CustomEvent('close')
	this.dispatchEvent(myEvent)
}
```
### Componente pai
- veja no html, ao embutir o componente filho, temos *'onclose'*, o qual escuta o event executado no componente filho
- por sua vez, após escutar o event, o componente pai executa o método *closeHandler* e fecha o modal
```html
<lightning-button label="Show Modal" onclick={clickHandler}></lightning-button>
<template if:true={showModal}>
	<c-c2p-modal-component onclose={closeHandler}></c-c2p-modal-component>
</template>
```
```js
showModal = false
clickHandler(){ 
	this.showModal = true
}
closeHandler(){ 
	this.showModal = false
}
```
# Child to Parent Communication Using Event with Data
- Semelhante ao componente anterior, mas agora enviamos com dados
### Componente filho
- houve somente uma alteração no método, agora passamos o objeto {detail:{campo:valor}} para envio dos dados
```js
closeHandler(){ 
	const myEvent = new CustomEvent('close', { 
		detail: { 
			msg:"Modal Closed Successfully!!"
		}
	})
	this.dispatchEvent(myEvent)
}
```
### Componente pai
- o fluxo continua o mesmo, houve alteração no método que fecha o modal, passando o *event* para extrair os dados
```js
showModal = false
clickHandler(){ 
	this.showModal = true
}
closeHandler(event){ 
	this.msg = event.detail.msg
	this.showModal = false
}
```
- e após o fechamento do modal, no html aparece os dados:
```html
<lightning-button label="Show Modal" onclick={clickHandler}></lightning-button>
<h1>{msg}</h1>
<template if:true={showModal}>
	<c-c2p-modal-component onclose={closeHandler}></c-c2p-modal-component>
</template>
```

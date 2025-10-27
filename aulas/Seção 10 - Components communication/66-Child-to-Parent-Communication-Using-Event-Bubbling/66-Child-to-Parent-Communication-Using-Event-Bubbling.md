# Child to Parent Communication Using Event Bubbling
- Há dois tipos de propagação de eventos; por padrão, ambos são **falsos**:
  - **Bubbles:** valor booleano indicando se o evento 'borbulha' no DOM ou não
  - **Composed:** valor booleano indicando se o evento pode passar através do shadow boundary
- Bubbling: funciona da seguinte forma:
  - componente filho embutido no componente pai; componente filho tem um event no componente pai envolvendo ele, o qual é acionado após o componente filho; e esse event do componente pai também pode estar envolvido por outro event; isso é o bubbling; ele 'borbulha' do event mais internto para o mais externo
  - ou seja, se tivermos 3 events, um embutido no outro, o mais interno é chamado, em seguida o event intermediário, e por fim, o mais externo
### Componente filho
- tornamos true o campo bubbles e add mais um método
```js
closeHandler(){ 
	const myEvent = new CustomEvent('close', { 
		bubbles:true,
		detail: { 
			msg:"Modal Closed Successfully!!"
		}
	})
	this.dispatchEvent(myEvent)
}
footerHandler(){ 
	console.log("footerHandler called")
}
```
- no html, envolvemos a chamada do *event closeHandler* com outro *event*, o *footerHandler*
```html
<footer class="slds-modal__footer" onclick={footerHandler}>
	<button class="slds-button slds-button_brand" onclick={closeHandler}>Ok</button>
</footer>
```
### Componente pai
- removemos o *onclose closeHandler* ao embutirmos o filho *c-c2p-modal-component* e colocamos na div *slds-var-m-around_medium*, linhas acima:
```html
<div class="slds-var-m-around_medium" onclose={closeHandler}>
	<lightning-button label="Show Modal" onclick={clickHandler}></lightning-button>
	<h1>{msg}</h1>
	<template if:true={showModal}>
		<c-c2p-modal-component></c-c2p-modal-component>
	</template>
</div>
```
# 114 Custom Validation in lightning-record-edit-form
Lidaremos com a validação personalizada no *lightning-record-edit-form*
```html
<lightning-record-edit-form
	object-api-name={objectName}
	onsubmit={handleSubmit}
	onsuccess={successHandler}
	onerror={handleError}
>
	<lightning-input 
		label="Name"
		value={inputValue}
		onkeyup={handleChange}
		class="slds-m-bottom_x-small">
	</lightning-input>
	<lightning-button class="slds-m-top_small" type="submit" label="Create Account"></lightning-button>
</lightning-record-edit-form>
``` 
- em *lightning-input* temos o *event* que receberá o valor inserido
- em *lightning-record-edit-form* temos as chamadas dos métodos *onsubmit={handleSubmit}*, *onsuccess={successHandler}* e *onerror={handleError}* que tratarão da validação dos dados inseridos
```js
handleSubmit(event){ 
	event.preventDefault()
	const inputCmp = this.template.querySelector('lightning-input')
	const value= inputCmp.value
	if(!value.includes('Australia')){ 
		inputCmp.setCustomValidity("The account name must include 'Australia'")
	} else { 
		inputCmp.setCustomValidity("")
		const fields = event.detail.fields
		fields.Name = value
		this.template.querySelector('lightning-record-edit-form').submit(fields)
	}
	inputCmp.reportValidity()
}
```
- **event.preventDefault()** impede o recarregamento da página ao enviar formulários (submit)
- **const inputCmp = this.template.querySelector('lightning-input')** usamos este por estarmos recebendo somente um valor, caso contrário usariamos *querySelectorAll*
- **inputCmp.setCustomValidity('Mensagem de erro')** com algum texto, o navegador entende que o campo é inválido e impede o envio do formulário. 
- **inputCmp.setCustomValidity("")** serve para limpar uma mensagem de erro de validação personalizada definida anteriormente em um campo de formulário, tornando-o novamente válido e informa ao navegador que a restrição de erro foi resolvida
- **inputCmp.reportValidity()**:
  - *Validação de Dados:* verifica se o vlr inserido em um campo cumpre as restrições definidas, como required (obrigatório), minlength, maxlength, pattern (regex) ou erros customizados com setCustomValidity().
  - *Feedback Imediato:* Se for inválido, é exibida uma mensagem de erro abaixo do campo e destaca-o em vermelho.
  - *Verificação Programática:* retorna um booleano (true -> válido, false -> inválido).
  - *Bloqueio de Envio:* frequentemente usado em botões de "Salvar"/"Enviar" p/ impedir que o formulário seja processado se houver dados inválidos

```js
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//...
successHandler(event){ 
	const toastEvent = new ShowToastEvent({ 
		title:"Account created",
		message: "Record ID: "+ event.detail.id,
		variant:"success"
	})
	this.dispatchEvent(toastEvent)
}
```
```js
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//...
handleError(event){ 
	const toastEvent = new ShowToastEvent({ 
		title:"Error creating Account",
		message: event.detail.message,
		variant:"error"
	})
	this.dispatchEvent(toastEvent)
}
``` 

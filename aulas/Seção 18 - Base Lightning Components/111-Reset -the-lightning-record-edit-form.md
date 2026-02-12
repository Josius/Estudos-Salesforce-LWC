# 111 Reset the lightning-record-edit-form
- Na aula anterior criamos um **lightning-record-edit-form** em que, se preenchermos os campos e clicarmos no botão *Cancel* nada ocorrerá. Nesta vamos corrigir isso.
- No botão *Cancel* add um método:
```html
<lightning-button onclick={handleReset} class="slds-m-around_xx-small" label="cancel"></lightning-button>
```
- E no js criamos o método que executará um loop buscando cada campo e redefinindo-os:
```js
handleReset(){ 
	const inputFields = this.template.querySelectorAll('lightning-input-field')
	if(inputFields){ 
		Array.from(inputFields).forEach(field=>{ 
			field.reset()
		})
	}
}
```
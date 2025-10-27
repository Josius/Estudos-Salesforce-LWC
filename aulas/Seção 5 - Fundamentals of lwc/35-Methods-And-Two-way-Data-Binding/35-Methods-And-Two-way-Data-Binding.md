# DATA BINDING IN A TEMPLATE
## Bidirecional, do controlador para o template e vice-versa
- Sempre que usuário alterar algo na tela/HTML a propriedade seja atualizada no JS

**Arquivo JS:**
```js
title = "Aura";
// event: chega ao JS como um feedback do HTML p/ JS; é um obj com muitas propriedades, no caso, queremos usar o title, então ao pressionar uma tecla e soltá-la, acionamos o evento, este tem um valor, no caso, a letra da tecla a qual é acessada com event.target.value, e esta é atribuida a propriedade title com this.title
changeHandler(event){
	this.title = event.target.value;
}
```
**Arquivo HTML:**
```html
<input type="text" onkeyup={changeHandler}> <!-- changeHandler, método do JS -->
<div>{fullName} is a course of {title}</div>
```

## Importante
- https://developer.salesforce.com/docs/component-library/overview/components - componentes para a página HTML, como cards, data-tables, inputs, etc..
- https://www.lightningdesignsystem.com/2e1ef8501/p/85bd85-lightning-design-system-2 - configurações pré-prontas para css

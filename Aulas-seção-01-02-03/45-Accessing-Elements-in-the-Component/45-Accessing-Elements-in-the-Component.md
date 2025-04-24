# Accessing Elements in the Component
- use *template property*:
- ñ use ID Selector c/ querySelector
	```js
	this.template.querySelector(selector); // para um único elemento
	this.template.querySelectorAll(selector); // para todos elementos, retorna array de nós
	element.template.querySelectorAll(selector);
	```
- add essa diretiva ao elemento HTML para anexar um outro elemento HTML como filho:
	```html
	lwc:dom="manual"
	<div class="child" lwc:dom="manual"></div>
	```
- deve ser usada quando a tag estiver vazia e algo será acrescentado as tags


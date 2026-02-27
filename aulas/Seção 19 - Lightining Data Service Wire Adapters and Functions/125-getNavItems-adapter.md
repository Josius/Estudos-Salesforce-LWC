# 125 getNavItems adapter (BETA)
Usar este **wire adapter** para recuperar os itens no menu de navegação
**OBS:** lightning/uiAppsApi não está pronto para ser usado em prod
```js
import { LightningElement, wire } from 'lwc';
import { getNavItems } from 'lightning/uiAppsApi';

export default class Example extends LightningElement {
    @wire(getNavItems, { 
		navItemNames: ['standard-Account'], 
		pageSize: 30 
	})
    propertyOrFunction;
}
```
- o campo **navItemNames** faz com que seja retornado somente dados sobre um item, se removermos ele, na respota conterá um array com a quantidade indicada em **pageSize**, cada um contendo dados próprios
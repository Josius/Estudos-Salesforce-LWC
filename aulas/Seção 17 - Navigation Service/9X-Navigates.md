# 91 Navigate to Home - Type: Named Pages
```html
<lightning-card title="Navigate To Home">
	<lightning-button variant="brand" label="Navigate To Home"
	onclick={navigateToHome}></lightning-button>
</lightning-card>
```
```js
navigateToHome(){ 
	this[NavigationMixin.Navigate]({ 
		type:'standard__namedPage',
		attributes:{ 
			pageName:'home'
		}
	})
}
```
- **this**: faz referência ao próprio componente
- **NavigationMixin.Navigate**: indica que o componente pode usar o navigate service
- **type:'standard__namedPage'**: informa ao navigate service o tipo de pág. ao qual deve ser redirecionada
- **attributes:{ pageName:'home' }**: indica a pág. ao qual será redirecionada

# 92 Navigate to Chatter - Type: Named Pages
Mesma abordagem que da aula anterior, somente com poucas diferenças
```html
<lightning-card title="Navigate To Chatter">
	<lightning-button variant="brand" label="Navigate To Chatter"
	onclick={navigateToChatterPage}></lightning-button>
</lightning-card>
```
```js
navigateToChatterPage(){ 
	this[NavigationMixin.Navigate]({ 
		type:'standard__namedPage',
		attributes:{ 
			pageName:'chatter'
		}
	})
}
```
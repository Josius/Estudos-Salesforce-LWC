# Navigate to Home - Type: Named Pages
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
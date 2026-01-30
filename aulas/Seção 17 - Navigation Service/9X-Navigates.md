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

# 93 Navigate To New Record - Type: Object Page
Semelhante as anteriores, criar um *lightning-card* no html, importar e chamar o *Navigate Service* usando um método, passando o tipo Objeto e os atributos indicando qual Objeto e qual ação deve ser tomada sobre esse objeto, o do exemplo abrirá a tela de criação de registro:
```js
navigateToNewRecord(){ 
	this[NavigationMixin.Navigate]({ 
		type:'standard__objectPage',
		attributes:{ 
			objectApiName:'Contact',
			actionName:'new'
		}
	})
}
```

# 94 Navigate To New Record With Default Values - Type: Object Page
Semelhante abordagem, porém agora importamos o *encodeDefaultFieldValues* e passamos valores a serem preenchidos nos campos da tela de criação do registro (no exemplo os valores estão em *hardcode*), também passamos agora o campo *state* contendo os valores:
```js
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
...
navigateToNewRecordWithDefault(){
	const defaultValue = encodeDefaultFieldValues({ 
		FirstName:'Zero',
		LastName:'Hero',
		LeadSource:'Other'
	}) 
	this[NavigationMixin.Navigate]({ 
		type:'standard__objectPage',
		attributes:{ 
			objectApiName:'Contact',
			actionName:'new'
		},
		state:{ 
			defaultFieldValues: defaultValue
		}
	})
}
```

# 95 Navigate To List View - Type: Object Page
Seguindo a mesma ideia, o exemplo demonstra uma lista de contatos filtrada pelos registros mais recentes. Verificar se é possível usar outro filtro, como *All Contacts*
```js
navigateToListView() { 
	this[NavigationMixin.Navigate]({ 
		type:'standard__objectPage',
		attributes:{ 
			objectApiName:'Contact',
			actionName:'list'
		},
		state:{ 
			filterName:'Recent'
		}
	})
}
```

# 96 Navigate To Files - Type: Object Page
Mesma lógica
```js
navigateToFiles(){ 
	this[NavigationMixin.Navigate]({ 
		type:'standard__objectPage',
		attributes:{ 
			objectApiName:'ContentDocument',
			actionName:'home'
		}
	})
}
```

# 97 Navigate To Record Page in View and Edit Mode - Type: Record Page
Seguindo a mesma lógica, mas agora além de mudar o tipo, também precisamos passar o recordId, o tipo do objeto e a ação a ser tomada, editar ou visualizar:
```js
recordViewMode(){ 
	this[NavigationMixin.Navigate]({ 
		type:'standard__recordPage',
		attributes:{ 
			recordId:'003N000001laB1ZIAU',
			objectApiName:'Contact',
			actionName:'view'
		}
	})
}
recordEditMode(){ 
	this[NavigationMixin.Navigate]({ 
		type:'standard__recordPage',
		attributes:{ 
			recordId:'003N000001laB1ZIAU',
			objectApiName:'Contact',
			actionName:'edit'
		}
	})
}
```
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

# 98 Navigate To Tab - Type: Nav Item Page
Temos que saber qual o *apiName* para adicionar em *attributes* logo, precisamos verificar o *apiName* na org, por exemplo, na url da org **https://orgdeteste-dev-ed.develop.lightning.force.com/lightning/n/Reusable_Component** veja que temos no fim da url *Reusable_Component*, este texto é o *apiName* que precisamos
			
```js
navigateToTab(){ 
	this[NavigationMixin.Navigate]({ 
		type:'standard__navItemPage',
		attributes:{ 
			apiName:'Styling_in_LWC'
		}
	})
}
```

# 99 Navigate To Record Relationship Page - Type: Record Relationship page
Neste podemos navegar para a página de relacionamento de um objeto, por exemplo, para *Contact* de uma *Account*. Note que precisamos do *recorId* do *objectApiName* e também do objeto de relacionamento em *relationshipApiName*
```js
navigateToRelatedList(){ 
	this[NavigationMixin.Navigate]({ 
		type:'standard__recordRelationshipPage',
		attributes:{ 
			recordId:'001N000001ytCVOIA2',
			objectApiName:'Account',
			relationshipApiName:'Contacts',
			actionName:'view'
		}
	})
}
```

# 100 Navigate To External Web Page - Type: Web Page
Este aparenta ser o mais simples de se usar
```js
navigateToWeb(){ 
	this[NavigationMixin.Navigate]({ 
		type:"standard__webPage",
		attributes:{ 
			url:"https://www.salesforcetroop.com"
		}
	})
}
```

# 101. Navigate To LWC Page - Type: Web Page
No exemplo, temos dois LWCs, um que direcionará para o outro. O que irá direcionar é semelhante aos anteriores, mas possuí alguma diferenças:
```js
navigateToLwc(){ 
	var defination={ 
		componentDef:'c:navigationLwcTarget',
		attributes: { 
			recordId:'768766686686'
		}
	}
	this[NavigationMixin.Navigate]({ 
		type:'standard__webPage',
		attributes: { 
			url:'/one/one.app#'+btoa(JSON.stringify(defination))
		}
	})
}
```
Em **var defination** temos:
- *componentDef:'c:navigationLwcTarget'* o qual é o nome do componente LWC que queremos ser redirecionados
- em *attributes* temos *recordId:'768766686686'* que é a forma de enviar dados para o outro LWC

Em **this[NavigationMixin.Navigate]** temos:
- *type:'standard__webPage'* pois o LWC é uma pág web
- em *attributes* temos *url:'/one/one.app#'+btoa(JSON.stringify(defination))*, o método *btoa* cria uma string codificada em base64 a partir da string binária

E para receber os dados no outro LWC usamos um *@api recordId*
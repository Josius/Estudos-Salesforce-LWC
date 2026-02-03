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

# 102. Navigate To AURA Component - Type: Component
Seguindo o mesmo padrão:
```js
navigateToAura(){ 
	this[NavigationMixin.Navigate]({ 
		type:"standard__component",
		attributes:{ 
			componentName:"c__AuraNavigation"
		},
		state:{ 
			"c__id":"7876868687686"
		}
	})
}
```
Mas no Aura precisamos fazer algumas modificações, como no arquivo .cmp para liberar a visualização do componente, atributos para receber dados, métodos para efetuar a transferência de dados, etc.:
```html
<aura:component implements="flexipage:availableForAllPageTypes, 
lightning:isUrlAddressable" access="global">
<aura:attribute name="id" type="String"/>
<aura:handler name="init" value="{!this}" action="{!c.onload}"/>

<div class="slds-card">
	<div> Hey I am coming from lwc and my record id is {!v.id}</div>
</div>
</aura:component>	
```
No controller configuramos a lógica do método:
```js
({
    onload : function(component) {
        var myPageRef = component.get("v.pageReference")
        var id = myPageRef.state.c__id
        component.set("v.id", id)
    }
})
```

# 103 Navigate To Visualforce page - Type: Web Page
Criamos uma VisualForce Page:
- Setup -> Quick Find:Visualforce pages -> New -> Preencher 'Label' e 'Name' é preenchido automaticamente -> Marque a caixa 'Available for Lightning Experience, Experience Builder sites, and the mobile app' -> Save

Novamente, semelhante abordagem:
```js
navigateToVFPage(){ 
	this[NavigationMixin.Navigate]({ 
		type:"standard__webPage",
		attributes:{ 
			url:"/apex/navigateVfpage"
		}
	}).then(generatedUrl=>{ 
		console.log(generatedUrl)
		window.open(generatedUrl)
	})
}
```
- Em *attributes* temos *url:"/apex/navigateVfpage"* com o nome da VisualForce Page
- Veja que precisamos usar uma *Promise* pois ele não redirecionará automaticamente para a VF Page, fazemos isso com *.then(generatedUrl=>* e *window.open(generatedUrl)*

# 104 Fetch Current Page Reference  
O objetivo é pegar o que estiver sendo passado na url, como um *recordId* ou outro dado relevante
```js
import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation'
export default class CurrentReference extends LightningElement {
    @wire(CurrentPageReference)
    pageRef

    get pageReference(){ 
        return this.pageRef ? JSON.stringify(this.pageRef, null, 2) : '';
    }
}
```
- importamos o *CurrentPageReference* e o *wire*, e os usamos em conjunto para que todos os dados sejam armazenados na variável *pageRef*
- usamos um get para retornar o conteúdo em *pageRef*, como é uma chamada assíncrona, usamos um ternário para o caso de não retornar nenhum dado
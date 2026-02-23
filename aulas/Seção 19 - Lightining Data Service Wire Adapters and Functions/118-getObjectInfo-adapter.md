# 118 getObjectInfo adapter
Usamos ese **adapter** sempre que precisamos buscar metadados sobre um objeto em específico. Na resposta está incluído metadados descrevendo os campos, relacionamentos filhos, RTs e temas, entre tantos outras informações. Segue-se a mesma sintaxe:
```js
import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class Example extends LightningElement {
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    propertyOrFunction;
}
```
- importamos o **wire**, em seguida o **adapter**, a referência ao objeto desejado e tratamos em uma função ou em um propriedade chamando o **@wire** e passando as config para o **adapter**
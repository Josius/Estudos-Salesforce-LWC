# 119 getObjectInfos adapter
Semelhante ao anterior, mas ao invés de buscar informações sobre um único objeto, podemos buscar sobre vários objetos em um componente. Segue-se a mesma sintaxe:
```js
import { LightningElement, wire } from 'lwc';
import { getObjectInfos } from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'

export default class Example extends LightningElement {
    @wire(getObjectInfos, { objectApiNames: [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT] })
    propertyOrFunction;
}
```
- importamos o **wire**, em seguida o **adapter**, a referência ao objeto desejado e tratamos em uma função ou em um propriedade chamando o **@wire** e passando as config para o **adapter**
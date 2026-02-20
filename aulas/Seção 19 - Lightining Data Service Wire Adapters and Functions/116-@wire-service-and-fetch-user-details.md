# 116 @wire service and fetch user details
- **Wire Service** é construído com base no **Lightning Data Service**; 
- componentes LWCs usam o **@wire** nas classes JS para ler dados oriundos de um dos **adapters** no **lightning/ui*Api**;
- **@wire** é um serviço reativo
- o **wire adapter** define a forma dos dados que o **wire service** provê em um fluxo imutável
```js
import { adapterId } from 'adapterModule';
@wire(adapterId, adapterConfig)
propertyOrFunction;
```
**Ida <-> Volta:** Browser:LWC <-> Browser:Lightning Data Service <-> Server:UI/API <-> Server:Database
```js
import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
```
1. Importamos o **wire**
2. Importamos o **getRecord** da API
```js
@wire(getRecord, {recordId:'005Hp00000iFUrTIAW', fields:['User.Name', 'User.Email']})
userDetailHandler(response){
	console.log(response)
}
```
3. configuramos o **@wire** passando o **adapter getRecord**, em seguida no **adapterConfig**, o qual nada mais é que parâmetros que o **getRecord** está esperando para usar, passamos o **recordId** para indicar de qual registro será recuperado os dados, por fim passamos **fields**, o qual é uma lista dos campos que serão recuperados do registro em questão

Abaixo o código já pronto usando de boas práticas para passar a lista de **fields** ao **adapter**, onde importamos a referência do dado desejado, também demonstra o uso do **wire as function** e do **wire as property**:
```js
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
const fields = [NAME_FIELD, EMAIL_FIELD]
export default class WireDemoUserDetail extends LightningElement {
    userDetail
    @wire(getRecord, {recordId:'005Hp00000iFUrTIAW', fields})
    userDetailHandler({data, error}){
        if(data){
            this.userDetail = data.fields
        }
        if(error){
            console.error(error)
        }
    }
    @wire(getRecord, {recordId:'005Hp00000iFUrTIAW', fields})
    userDetailProperty
}
```

## Modos de importar referências do Salesforce
### Como importar a referência de um objeto padrão do Salesforce
```js
// Sintaxe
import objectName from '@salesforce/schema/object'
// Exemplo
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
```
### Como importar a referência de um objeto personalizado do Salesforce
```js
// Sintaxe
import objectName from '@salesforce/schema/object__c'
// Exemplo
import PROPERTY_OBJECT from '@salesforce/schema/Property__c'
```
### Como importar a referência de um campo do objeto do Salesforce
```js
// Sintaxe
import FIELD_NAME from '@salesforce/schema/object.field'
// Exemplo
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'
import PROPERTY_NAME from '@salesforce/schema/Property__c.Name'
```
### Como importar a referência de um campo por meio de um relacionamento
```js
// Sintaxe
import REF_FIELD from '@salesforce/schema/object.relationship.field'
// Exemplo
import ACCOUNT_OWNER from '@salesforce/schema/Account.Owner.Name'
```

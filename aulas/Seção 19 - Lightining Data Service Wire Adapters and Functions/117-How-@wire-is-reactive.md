# 117 How @wire is reactive
**Reactive** significa que, uma vez que os dados estejam disponíveis, eles devem ser atualizados imediatamente. No código anterior temos:
```js
import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
const fields = [NAME_FIELD, EMAIL_FIELD]
export default class WireDemoUserDetail extends LightningElement {
    userId = Id
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
Como estamos importando o Id do usuário, podemos passar para o **adapter**:
```js
import Id from '@salesforce/user/Id'
//...
userId = Id
//...
@wire(getRecord, {recordId:userId, fields})
```
Porém, a recuperação em **userId = Id** é assíncrona e o **@wire** é síncrono, desta forma ele não está reativo e não funcionará, ou seja, o **@wire** executará antes do **userId** ser preenchido. Para evitar isso e tornar a propriedade **userId** reativa devemos usar aspas simples + $ + propriedade -> *'$propriedade'*:
```js
@wire(getRecord, {recordId:'$userId', fields})
```
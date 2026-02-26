### **OBS:** getListUi está obsoleto, usar o [getListInfoByName](https://developer.salesforce.com/docs/platform/lwc/guide/reference-get-list-info-by-name.html) no lugar do **getListUi**
# 124 getListUi adapter
Usar esse **wire adapter** para obter registros e metadados de uma lista de exibição
```js
import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class Example extends LightningElement {
    @wire(getListUi, { objectApiName: CONTACT_OBJECT, listViewApiName: 'AllContacts' })
    propertyOrFunction;
}
```
- **objectApiName**: o ApiName de um objeto
- **listViewApiName**: o ApiName de uma lista de visualização, tal como 'AllAccounts', 'AllContacts', etc.
- **sortBy, pageSize, pageToken**: essas são algumas das configurações possíveis de se utilizar, *pageSize e pageToken* permitem fazer paginação
```js
import { LightningElement, wire } from 'lwc';
import {getListUi} from 'lightning/uiListApi'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
export default class GetListUiDemoLwc extends LightningElement {
    @wire(getListUi, {
        objectApiName:CONTACT_OBJECT,
        listViewApiName:'AllContacts',
    })
    listViewHandler({data, error}){
        if(data){
            console.log(data)
        }
        if(error){
            console.error(error)
        }
    }
}
```
- acima um exemplo de completo e no que é retornado, temos a lista de registros, a quantidade (*count*), colunas de exibição (*displayColumns*) e diversas outras infos
- **sobre paginação:** com botões de anterior e próximo configurados e quando usamos esse **adapter**, ele retornar as infos **previousPageToken** e **nextPageToken** os quais vem como **null** se não enviarmos a configuração **pageSize** no **adapter**, caso contrário, se enviarmos na 1ª chamada, por exemplo, **pageSize=10**, retorna **previousPageToken=null** e **nextPageToken=10**, e a cada vez que clicarmos no botão de próximo ou anterior, **previousPageToken=null** e **nextPageToken** serão incrementados ou decrementados com base no valor do **pageSize**; também os usamos para a paginação. Além desses temos o **currentPageToken**
```js
import { LightningElement, wire } from 'lwc';
import {getListUi} from 'lightning/uiListApi'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import TITLE_FIELD from '@salesforce/schema/Contact.Title'
export default class GetListUiDemoLwc extends LightningElement {
    contacts=[]
    pageToken = null
    nextPageToken = null
    previousPageToken = null
    @wire(getListUi, {
        objectApiName:CONTACT_OBJECT,
        listViewApiName:'AllContacts',
        pageSize:10,
        sortBy:TITLE_FIELD,
        pageToken:'$pageToken'
    })
    listViewHandler({data, error}){
        if(data){
            console.log(data)
            this.contacts = data.records.records
            this.nextPageToken = data.records.nextPageToken
            this.previousPageToken = data.records.previousPageToken
        }
        if(error){
            console.error(error)
        }
    }
    handlePreviousPage(){
        this.pageToken = this.previousPageToken
    }
    handleNextPage(){
        this.pageToken = this.nextPageToken
    }
}
```
- acima, o código completo com paginação, note que ao preencher o array *contacts* em *this.contacts*, temos *data.records.records*
- para fazer a paginação, usamos **pageSize:10** para determinar a quantidade de registros que serão retornados e exibidos em tela, 
- **pageToken** é a variável que irá controlar qual página estamos (**currentPageToken**) e se podemos avançar ou voltar, note que ele é reativo
- **nextPageToken** e **previousPageToken** são as variáveis que controlaram para qual página queremos ir quando clicarmos nos botões de **Anterior** ou **Próximo**
- ordenamos a lista com base no campo **Title** em **sortBy:TITLE_FIELD**
- para visualizar os dados podemos usar um **datatable** ou construir uma tabela no html
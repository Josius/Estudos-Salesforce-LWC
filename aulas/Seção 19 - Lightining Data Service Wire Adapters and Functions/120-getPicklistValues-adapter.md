# 120 getPicklistValues adapter
Usamos esse **wire adapter** para recuperar valores de **picklist** para um campo específico. Segue sintaxe abaixo:
```js
import { LightningElement, wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'

export default class Example extends LightningElement {
    @wire(getPicklistValues, { recordTypeId: '121212145487', fieldApiName: INDUSTRY_FIELD })
    propertyOrFunction;
}
```
Para picklist, usamos **combobox** no html além de outras configurações no js - [**doc combobox**](https://developer.salesforce.com/docs/platform/lightning-component-reference/guide/lightning-combobox.html?type=Example), mas basicamente na configuração do **combobox** teremos:
- na tag **combobox** o campo *value={value}* e no js a variável *value = 'inProgress';*, os quais serão a referência para o valor selecionado da picklist
- na tag **combobox** o campo *options={options}* e no js o **get** *get options() { return [{ label: 'New', value: 'new' }, ... ]; }*, os quais serão a referência para os valores disponíveis na picklist
- na tag **combobox** o campo *onchange={handleChange}* e no js o método *handleChange(event) { this.value = event.detail.value;}*, o qual alterará o intermediador entre a variável/campo *value* e os valores de *options*, ou seja, ele que efetuará a mudança com base no valor escolhido na picklist
```js
import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues} from 'lightning/uiObjectInfoApi'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetPIcklistValuesDemo extends LightningElement {
    selectedIndustry = '';
    industryOptions=[]

    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfo

    @wire(getPicklistValues, { recordTypeId:'$objectInfo.data.defaultRecordTypeId', fieldApiName:INDUSTRY_FIELD})
    industryPicklist({data, error}){
        if(data){
            console.log(data)
            this.industryOptions = [...this.generatePicklist(data)]
        }
        if(error){
            console.error(error)
        }
    }
    generatePicklist(data){
        return data.values.map(item=>({ label: item.label, value: item.value }))
    }
    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }
}
```
- como o *options* nada mais é que um lista do tipo chave-valor, podemos criar um método para gerar esse array (**generatePicklist**)
- entretanto, precisamos passar um **recordTypeId** para recuperar os dados da **picklist** do objeto desejado, neste caso usamos o **objectInfo** para recuperar o **recordTypeId** do objeto em questão e passamos para o **adapter**
- para demonstrar em tela os valores da picklist usamos o combobox:
```html
<template>
    <lightning-card title="getPicklistValues Demo">
        <div class="slds-var-p-around_medium">
            <lightning-combobox
            name="Industry"
            label="Industry"
            value={selectedIndustry}
            placeholder="Select Industry"
            options={industryOptions}
            onchange={handleChange} ></lightning-combobox>
        </div> 
        <p>selectedIndustry:{selectedIndustry}</p>
    </lightning-card>
</template>
```

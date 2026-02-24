# 121 getPicklistValuesByRecordType adapter
Use esse **wire adapter** para recuperar os valores para cada **picklist** de um específico **recordType**. Ou seja, ao invés de buscarmos cada picklist e gerar mais código para isso, simplesmente buscamos todos os picklist do objeto em questão.
```js
import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class Example extends LightningElement {
	@wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfo

    @wire(getPicklistValuesByRecordType, { objectApiName: ACCOUNT_OBJECT, recordTypeId: '$objectInfo.data.defaultRecordTypeId' })
    propertyOrFunction;
}
```
- entretanto, precisamos passar um **recordTypeId**, neste caso usamos o **objectInfo** para recuperar o **recordTypeId** do objeto em questão e passamos para o **adapter**
- e é semelhante ao código anterior, se houver dados, atribuímos a cada variável os dados obtidos usando o método **picklistGenerator**:
```js
ratingOptions
industryOptions
// ...
if(data){
	this.ratingOptions = this.picklistGenerator(data.picklistFieldValues.Rating)
	this.industryOptions = this.picklistGenerator(data.picklistFieldValues.Industry)
}
// ...
picklistGenerator(data){
	return data.values.map(item=>({"label":item.label, "value":item.value}))
}
```
- e ao invés de criamos vários métodos **handleChange** para cada **picklist**, usamos um único atribuíndo com base em um **if-else**
```js
handleChange(event){
	const {name, value} = event.target
	console.log(name +'==>' +value)
	if(name === 'industry'){
		this.selectedIndustry = value
	}
	if(name === 'rating'){
		this.selectedRating = value
	}
}
```

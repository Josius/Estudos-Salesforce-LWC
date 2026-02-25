# 123 getFieldValue & getFieldDisplayValue functions
### getFieldValue
Use para obter o valor de um campo de um registro
```js
import { getFieldValue } from 'lightning/uirecordApi';
getFieldValue(record: Record, field: string)
```
### getFieldDisplayValue
Use para obter o valor de exibição, o valor formatado de um campo de um registro
```js
import { getFieldDisplayValue } from 'lightning/uirecordApi';
getFieldDisplayValue(record, field)
```
Com base no exemplo anterior, ao invés de usarmos uma algo como **data.fields.Name.value** ou **data.fields.Name.displayValue**, podemos usar um dos **adapters** acima para recuperar os valores que desejamos:
```js
if(data){
	this.name = getFieldValue(data, NAME_FIELD) 
	this.AnnualRevenue = getFieldDisplayValue(data, ANNUAL_REVENUE_FIELD) 
	this.owner = getFieldValue(data, OWNER_NAME_FIELD) 
}
```
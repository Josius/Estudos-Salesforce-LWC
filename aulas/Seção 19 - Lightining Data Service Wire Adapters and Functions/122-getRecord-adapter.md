# 122 getRecord adapter
Usamos esse **wire adapter** para recuperar dados de um registro de algum objeto.
```js
import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi'

export default class Example extends LightningElement {
	@wire(getRecord, { recordId: string, fields: string||string[], optionalFields?: string||string[] })
    propertyOrFunction;

    @wire(getRecord, { recordId: string, layoutTypes: string||string[], modes?: string||string[], optionalFields?: string||string[] })
    propertyOrFunction;
}
```
- **recordId** - Id do registro
- **fields** - um campo ou um vetor de campos, se o usuário não tiver acesso, um **error** será lançado
- **optionalFields** -  semelhante ao **fields** mas ele verificará se um campo é acessível para o usuário, se o campo não for, ele será ignorado e não lançará um **error**.
- **layoutType** - aceita dois valores, **Compact** ou **Full(default)**
- **modes** - usado com layout, valores suportados são **Create**, **Edit** e **View(default)**
```js
import { LightningElement, wire, api } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'

export default class Example extends LightningElement {
    name
    owner
    AnnualRevenue
    @api recordId
    @wire(getRecord, {recordId:'$recordId', fields:[NAME_FIELD, OWNER_NAME_FIELD, ANNUAL_REVENUE_FIELD]})
    accountHandler({data}){
        if(data){
            console.log(data)
			this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value
			this.AnnualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value
			this.owner = data.fields.Owner.displayValue ? data.fields.Owner.displayValue : data.fields.Owner.value
        }
    }
}
```
- Neste exemplo acima, iremos usar o **lightning__RecordPage** no arquivo *xml* pois assim pegamos o recordId do registro que carregamos na página, por isso usamos o **@api recordId** para pegar automaticamente o id do registro que será aberto na página
```json
{
	"AnnualRevenue":{
		"displayValue":"R$ 350.000.000",
		"value":350000000
	}
}
```
- Os campos chegam no modelo acima, com **displayValue** e **value**, **displayValue** é o valor de exibição, o qual está formatado e é normalmente o que o usuário vê e **value** contém o valor armazenado no banco de dados. No exemplo estamos verificando se há o **displayValue** e usando se existir, do contrário, usa-se o **value**
```js
@wire(getRecord, {recordId:'$recordId', layoutTypes:['Full'], modes:['View']})
```
- Ao invés usar o **@wire** que está no exemplo, podemos usar o modelo acima o qual retornará todos os campos existentes no *layout* e usamos no html somente os campos que nos interessam
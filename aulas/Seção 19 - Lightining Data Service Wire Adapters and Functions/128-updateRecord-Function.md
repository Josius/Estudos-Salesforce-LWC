# 128 updateRecord Function
### updateRecord Function(recordInput, clientOptions)
Usar esse **wire adapter** para atualizar um registro. Forneça o **recordId** do registro para atualizar no **recordInput**
```js
import { updateRecord } from 'lightning/uiRecordApi';
updateRecord(recordInput: Record, clientOptions?: Object): Promise<Record>
```
- **clientOptions(opcional)** para checar conflitos antes de atualizar o registro
```html
<template>
    <lightning-card title="Update Record Demo">
        <div class="slds-p-around_medium">
            <lightning-datatable
                key-field="Id"
                data={contacts}
                columns={columns}
                draft-values={draftValues}
                onsave={handleSave}
                hide-checkbox-column>
            </lightning-datatable>
        </div>
    </lightning-card>
</template>
```
- para visualizar os dados usamos um [data table](https://developer.salesforce.com/docs/platform/lightning-component-reference/guide/lightning-datatable.html?type=Example)
# 110 lightning-record-edit-form
- Usado para criar e editar registros
- Provê um layout de campos customizado e renderiza dados de registros customizados
- Com **lightning-record-edit-form** o que você pode fazer com os registros:  create, edit, custom layout for fields e custom rendering of record data
- Neste exemplo criamos um *contact* para uma *account*, ou seja, primeiro buscamos e escolhemos uma *account* e em seguida, criamos o *contact*
- A tag **<lightning-messages></lightning-messages>** permite que seja exibido na tela uma mensagem de erro se algo acontecer ao tentar salvar o registro, ele não mostra mensagem de sucesso
```html
<lightning-record-edit-form 
object-api-name={objectName}>
	<lightning-messages></lightning-messages>
	<lightning-input-field field-name={fields.accountField}></lightning-input-field>
	<lightning-input-field field-name={fields.nameField}></lightning-input-field>
	<lightning-input-field field-name={fields.titleField}></lightning-input-field>
	<lightning-input-field field-name={fields.phoneField}></lightning-input-field>
	<lightning-input-field field-name={fields.emailField}></lightning-input-field>
	<lightning-button class="slds-m-around_xx-small" label="cancel"></lightning-button>
	<lightning-button variant="brand" type="submit" class="slds-m-around_xx-small" label="Save"></lightning-button>
</lightning-record-edit-form>
```
```js
import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Contact.Name'
import TITLE_FIELD from '@salesforce/schema/Contact.Title'
import PHONE_FIELD from '@salesforce/schema/Contact.Phone'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
export default class RecordEditForm extends LightningElement {
    objectName = CONTACT_OBJECT
    fields={ 
        accountField:ACCOUNT_FIELD,
        nameField:NAME_FIELD,
        titleField:TITLE_FIELD,
        phoneField:PHONE_FIELD,
        emailField:EMAIL_FIELD
    }
}
```
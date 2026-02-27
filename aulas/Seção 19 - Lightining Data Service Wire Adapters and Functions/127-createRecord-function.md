# 127 createRecord function
Usar este **createRecord** para criar registros de um objeto
```js
import { createRecord } from 'lightning/uiRecordApi';
createRecord(recordInput: Record): Promise<Record>
```
- **recordInput** - um **record input object** é usado para criar o registro. Este objeto recebe o nome da API do objeto e os detalhes dos campos como entrada.
- lembrando que para criar um registro precisamos passar os dados desse novo registro por meio de um formulário no html e uma função no js:
```html
<form class="createForm">
  <lightning-input label="First Name" name="FirstName"
    onchange={changeHandler} class="slds-m-bottom_x-small"></lightning-input>
  <lightning-input type="tel" label="Phone" name="Phone"
    onchange={changeHandler} class="slds-m-bottom_x-small"></lightning-input>
  <lightning-input type="email" label="Email" name="Email"
    onchange={changeHandler} class="slds-m-bottom_x-small"></lightning-input>
  <lightning-button label="Create Contact" variant="brand" onclick={createContact}></lightning-button>
</form>
```
```js
import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CreateRecordDemo extends LightningElement {
  formFields={}
  changeHandler(event){
      const {name, value} = event.target
      this.formFields[name]=value
  }
  createContact(){
      const recordInput = {apiName:CONTACT_OBJECT.objectApiName, fields:this.formFields}
      createRecord(recordInput).then(result=>{
          this.showToast('Success!!', `contact created with is ${result.id}`)
          this.template.querySelector('form.createForm').reset()
          this.formFields={}
      }).catch(error=>{
          this.showToast('Error Creating record', error.body.message, 'error')
      })
  }
  showToast(title, message, variant){
      this.dispatchEvent(new ShowToastEvent({
          title,
          message,
          variant:variant || 'success'
      }))
  }
}
```
- com **changeHandler** armazenamos no objeto **formFields** o par *"name":"value"*
- com **createContact** chamamos o **createRecord** para criar um novo registro do objeto, porém precisamos passar o tipo de objeto do registro que será criado, por isso importamos a a referência ao objeto desejado além de criar uma constante **recordInput** com os dados do formulário em **fields** e com o **apiName** do objeto
- como **createRecord** é uma *promise*, usamos um outro método para ouvi-lá (*then e catch*)
- com **this.template.querySelector('form.createForm').reset()** apagamos os dados do formulário após enviar para criação do registro, além de limpar o objeto com **this.formFields={}**
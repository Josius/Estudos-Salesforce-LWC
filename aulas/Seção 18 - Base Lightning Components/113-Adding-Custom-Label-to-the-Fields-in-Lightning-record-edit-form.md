# 113 Adding Custom Label to the Fields in Lightning-record-edit-form
Basicamente, o *rótulo/label* do campo vem por padrão da org, como *Name*, *email*, etc., com essa configuração pode-se usar um *rótulo/label* personalizado, p.e.: ao invé de *email* esteja como *insira seu email*. Neste caso precisamos alterar o html:

De:
```html
<lightning-input-field field-name={fields.emailField}></lightning-input-field>
```
Para
```html
<label class="slds-p-left_x-small">Enter your email</label>
<lightning-input-field variant="label-hidden" field-name={fields.emailField}></lightning-input-field>
```
- ou seja, add uma tag *label* com o texto personalizado
- add a tag *lightning-input-field* o valor *variant="label-hidden"* para desabilitar a label padrão da org
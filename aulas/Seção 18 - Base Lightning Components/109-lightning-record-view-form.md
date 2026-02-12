# 109 lightning-record-view-form
- Use para criar um form que exibe dados do registro para específicos campos associados com esse registro. Os campos são renderizados com suas próprias labels e valores atuais como *readonly*
- Pode customizar o form ou prover rederização customizada dos dados do registro. Se não é necessário customizações, use **lightning-record-form**
- Para especificar campos *readonly*, use **lightning-output-field** dentro de **lightning-record-view-form**
- Com **lightning-record-form** o que você pode fazer com os registros: view, read-only mode, custom layout for fields e custom rendering of record data
```html
<lightning-record-view-form
object-api-name="Account"
record-id="001Hp000040Vr1SIAS">
	<div class="slds-grid slds-gutters">
		<div class="slds-col slds-size_6-of-12">
			<lightning-output-field field-name="Name"></lightning-output-field>
			<lightning-output-field field-name="Phone"></lightning-output-field>
			<lightning-output-field field-name="Industry"></lightning-output-field>
		</div>
		<div class="slds-col slds-size_6-of-12">
			<lightning-output-field field-name="AnnualRevenue"></lightning-output-field>
		</div>

	</div>
</lightning-record-view-form>
```
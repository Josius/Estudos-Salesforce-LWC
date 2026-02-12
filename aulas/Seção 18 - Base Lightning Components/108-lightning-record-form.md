# 108. lightning-record-form
Use o componente lightning-record-form para criar rapidamente formulários para adicionar, visualizar ou atualizar um registro.
O componente lightning-record-form oferece estes recursos úteis:
- Alterna automaticamente entre os modos de visualização e edição quando o usuário começa a editar um campo em um formulário de visualização
- Fornece botões de Cancelar e Salvar automaticamente em formulários de edição
- Usa o layout de registro padrão do objeto com suporte para várias colunas
- Carrega todos os campos no layout compacto ou completo do objeto, ou apenas os campos que você especificar
O lightning-record-form é menos personalizável. Para personalizar o layout do formulário ou fornecer renderização personalizada de dados de registro, use lightning-record-edit-form (adicionar ou atualizar um registro) e lightning-record-view-form (visualizar um registro)

Observação: sempre que possível, para aumentar o desempenho, defina campos em vez de um layout. Especifique um layout somente quando o administrador, e não o componente, precisar gerenciar os campos provisionados

### Lightning-record-form key attributes
- **object-api-name** - este atributo é sempre obrigatório. O componente lightning-record-form exige que você especifique o atributo object-api-name para estabelecer a relação entre um registro e um objeto.
*Observação: Event and Task objects não são suportados.*
- **record-id** - este atributo é obrigatório apenas ao editar ou visualizar um registro.
- **fields** - passe os arquivos de registro como uma array de strings. Os campos são exibidos na ordem em que você os lista.
- **layout-type** - use este atributo para especificar um layout Completo ou Compacto. Os layouts geralmente são definidos (criados e modificados) por administradores.
- **modes** - este formulário suporta três modos:
- *edit* - cria um formulário editável para adicionar um registro ou atualizar um existente. O modo de edição é o padrão quando o record-id não é fornecido e exibe um formulário para criar novos registros.
- *view* - cria um formulário para exibir um registro que o usuário também pode editar. Os campos do registro possuem um botão de edição. O modo de visualização é o padrão quando o record-id é fornecido.
- *readonly* - cria um formulário para exibir um registro que o usuário também pode editar.
- **colunas** - use este atributo para exibir várias colunas no formulário.
- Com **lightning-record-form** o que você pode fazer com os registros: create, edit, view, read-only mode, layout types e multi column layout

### Criar um registro usando lightning-record-form
Importar referências a objetos e campos do Salesforce de **@salesforce/schema**
```js
import objectName from '@salesforce/schema/objectReference' //Account, Case, Opportunity, etc.
import fieldName from '@salesforce/schema/object.fieldReference' //Account.Name, Account.AnnualRevenue, etc.
```
```html
<lightning-record-form
	object-api-name={objectName}
	fields={fieldList}
	onsuccess={successHandler}>
</lightning-record-form>
```

### Exibir um registro usando lightning-record-form
É possível de dois modos:
1. **view** - Neste modo, o formulário utiliza campos de saída com edição em linha habilitada.
2. **read-only** - Nesse modo, o formulário carrega apenas com os campos de saída e você não verá ícones de edição nem os botões de enviar e cancelar.
```html
<lightning-record-form
	record-id="001N000001zcknoIAA"
	object-api-name={objectName}
	fields={fieldList}>
</lightning-record-form>
```

# Editar um registro usando lightning-record-form
```html
<lightning-record-form
	record-id="001Hp000040Vr1SIAS"
	object-api-name={objectName}
	fields={fieldList}
	mode="edit"
	columns="2">
</lightning-record-form>
```

# Editar um registro sem usar fields={fieldList}
- Neste é possível implantar o componente LWC na recordPage do Objeto e usar o @api com recordId e objectApiName, no qual a alteração ocorrerá no próprio registro
```js
@api recordId
@api objectApiName
```
```html
<lightning-record-form
	record-id="{recordId}"
    object-api-name={objectApiName}
	mode="edit"
	columns="2"
	layout-type="Compact">
</lightning-record-form>
```
# 112 Edit the lightning-record-edit-form
- Nesta aula vamos aprendar como editar o registro, precisamos do id
- No html, abaixo de **object-api-name={objectName}** add **record-id="id-do-registro"** passando o id do registro. Com isso, ao carregar o form ele buscará todos os dados e os mapeará para os respectivos campos
```html
<lightning-record-edit-form 
object-api-name={objectName}
record-id="003N000001mL1V4IAK"
>
```
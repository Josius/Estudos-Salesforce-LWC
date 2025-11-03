# Access Labels
- Custom labels são valores textuais armazenados no Salesforce que podem traduzir em qualquer linguagem que o Salesforce suporte. Use custom labels para criar aplicações multilíngua que apresenta informações na linguagem nativa do usuário.
```js
import labelName from '@salesforce/label/labelReference'
```
### Configuração na Org
- Em *Setup -> Quick Find: Custom Labels -> New Custom Label -> preencher:  Short Description, Value, Name é automaticamente com base em Short Description -> Save*
### Configuração no código
```js
import DESCRIPTION_ONE from '@salesforce/label/c.descriptionOne'
...
LABELS = { 
	descriptionOne:DESCRIPTION_ONE,
```


**NOTA:** o nome da label na org é no formato *namespace.labelName*
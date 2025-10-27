# DATA BINDING IN A TEMPLATE
## Unidirecional, do controlador para o template
- Data binding em LWC é a sincronização entre o controlador JS e o template HTML
- É um vínculo unidirecional, de JS para HTML

**Arquivo JS:**
```js
fullName = "Zero to Hero"; //local property
users = ["a", "b", "c"];
obj = {
		name: "Jorge",
		age: "25"
	}
```
**Arquivo HTML:**
```html
<div>{fullName}</div> <!--data binding-->
<!--permitido-->
<div>{obj.name}</div>
<div>{obj.age}</div>
<div>{users}</div> 
<!--NÃO permitido-->
<div>{users[0]}</div>
```

## Importante
-  No template, podemos acessar o vlr da propriedade diretamente se ela for primitiva ou objeto
-  Dot Notation é usada para acessar a propriedade de um objeto
-  LWC não permite expressões computadas, como **Names[2]** ou **{2 + 2}**
-  propriedades entre **chaves** devem ser válidas, como **{name}** ou **{user.name}**
-  evite usar espaço entre as propriedades **{ data }**
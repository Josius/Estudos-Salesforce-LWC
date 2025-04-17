# Getters in LWC
### NÃO PERMITIDO
**Arquivo HTML:**
```html
<div>users[0]</div> <!--permitido-->
<div>{num1 * num2}</div> <!--NÃO PERMITIDO-->
```
**Arquivo JS:**
```js
users=["J", "S", "T"];
num1 = 10;
num2 = 20;
```

### PERMITIDO
**Arquivo HTML:**
```html
<div>{firstUsers}</div> <!--permitido-->
<div>{sumOfNumbers}</div> <!--NÃO PERMITIDO-->
```
**Arquivo JS:**
```js
users=["J", "S", "T"];
get firstUser(){
	return this.users[0];
}

num1 = 10;
num2 = 20;
get sumOfNumbers(){
	return this.num1 * this.num2;
}
```

## Importante

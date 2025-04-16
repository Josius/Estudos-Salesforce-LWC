# Template Looping
## Template Looping Types
### for:Each
**Syntax:**
```html
<template for:each={array} for:item="currentItem" for:index="index">
	Here your repeatable template comes
</template>
```
- Não funciona com objeto ou tipos primitivos
- **for:each={array}:** vetor de entrada
- **for:item="currentItem":** *currentItem* é o valor do elemento atual, o nome *currentItem* pode ser alterado; *for:item* mantém o *currentItem*
- **for:index="index":** índice do elemento atual; *for:index* mantém o *index*
### key importance
- ajuda ao LWC identificar quais elementos foram alterados, adicionados ou removidos
- precisa ser numérico ou string únicos
- não pode ser objeto
- não pode usar index como valor para a key

### iterator
**Syntax:**
```html
<template iterator:iteratorName={array}>
	Here your repeatable template comes
</template>
```
- para aplicar um comportamento especial p/ o 1º ou último item da lista, use **iterator**
- **iterator:** indica que ao template que é um *iterator* e não um *for:each*
- **iteratorName:** valor do elemento atual no loop, o nome *iteratorName* pode ser alterado
- **array:** dado ao qual vamos aplicar no loop 

### propriedades do iterator
- **value:** use para acessar propriedades do elemento do vetor -> *iteratorName.value.propertyName*
- **index:** índice do elemento na lista -> *iteratorName.index*
- **first:** booleando indicando se o elemento é o 1º da lista -> *iteratorName.first*
- **last:** booleando indicando se o elemento é o último da lista -> *iteratorName.last*

### IMPORTANTE
- Não usar <ul> dentro de um loop

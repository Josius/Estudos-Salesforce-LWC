# Setter Method
- usado para alterar os dados enviados pelo componente pai para o componente filho
- se os dados forem um objeto, é necessário criar uma cópia superficial dos dados para alterá-lo
- Nesta aula, criamos dois componentes, incorporamos um ao outro e usamos *@api* para a comunicação, como anteriormente.
- no js do componente pai criamos os dados:
```js
userDetails = {
    name:"salesforcetroop",
    age:25
}
```
- incorporamos o componente filho passando os dados para a varíavel detail deste mesmo componente
```html
<c-setter-demo-child detail={userDetails}></c-setter-demo-child>
```
- no componente filho preparamos o recebimento dos dados e o tratamento
```js
userDetail
@api
get detail(){
    return  this.userDetail
}
set detail(data){
    let newAge = data.age*2
    this.userDetail = {...data, age:newAge, "location":"Melbourne"}
}
```
e por fim, renderizamos no html
```html
<p><strong>Name</strong> - {detail.name}</p>
<p><strong>Age</strong> - {detail.age}</p>
<p><strong>location</strong> - {detail.location}</p>
```

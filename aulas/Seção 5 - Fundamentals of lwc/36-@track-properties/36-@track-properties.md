# @Track
### @track properties
- Quando um campo contém um obj ou array, há um limite p/ a profundidade das alterações que são rastreadas.Para dizer a estrutura p/observer as alterações nas propriedades de um obj ou nos elementos de uma matriz, precisamos decorar o campo com **@track**

### Normal property vs @track property
- Sem usar @track, o framework observa mudanças que atribuem um novo valor a um campo/propriedade. Se o novo valor não for === ao valor anterior, o componente renderiza novamente. Explicando melhor, quando usamos tipos de dados complexos, como objeto ou array, acessar os campos internos SEM usar *@track*, a alteração não ocorre como em **two way data binding**. Já com *@track*, rastreamos todos os campos/propriedades/atributos aninhados, ou seja, dentro do objeto.

**Arquivo HTML:**
```html
<lightning-card  title="@track properties">
	<div class="slds-m-around_medium">
		<lightning-input type="text" label="Enter city name" onkeyup={trackHandler}></lightning-input>
		<div>{address.city} is my city</div>
	</div>
</lightning-card>
```

**Arquivo JS:**
```js
import { LightningElement, track } from 'lwc';
@track address={
	city: "Melbourne",
	country: 'Australia',
	postalCode: 3008
}
@track arrayL=["a", "b", "c"];

trackHandler(event){
	this.address.city = event.target.value;
	this.arrayL[0] = "";
}
```

## Outra forma de alterar o valor sem usar @track
**Arquivo JS:**
```js
import { LightningElement, track } from 'lwc';
address={
	city: "Melbourne",
	country: 'Australia',
	postalCode: 3008
}

trackHandler(event){
	this.address = {...this. address, "city": event.target.value}; //tds as propriedades serão espalhadas, no lado direito, verá que um valor está chegando para o campo city. Se esse campo estiver disponível no obj do lado esquerdo, será substituída. Desta forma não precisamos de @track pois estamos atualizando o obj inteiro ao invés de um único campo.
}
```

## Importante
- **Boas práticas:** não se deve alterar os dados, logo, não se deve usar **@track** sobre o obj original. O ideal é criar uma cópia e trabalhar com ela.

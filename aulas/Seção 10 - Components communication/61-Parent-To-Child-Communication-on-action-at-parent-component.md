# Parent To Child Communication on action at parent component
- Comunicação de pai para filho, mas não diretamente, como por exemplo, ao clique de algum botão ou alterar algum campo no componente pai e passará essa alteração para o componente filho
- Seguindo o mesmo padrão, no js do componente pai:
```js
percentage=10
changeHandler(event){
	this.percentage = event.target.value
}
```
- passamos para o componente filho por meio do html pai:
```html
<lightning-card title="Parent to Child communication on action">
	<div class="slds-var-m-around_medium">
		<lightning-input 
			type="number" 
			label="Enter percentage" 
			onkeyup={changeHandler} 
			value={percentage}>
		</lightning-input>
		<c-p2c-progress-component progress-value={percentage}></c-p2c-progress-component>
	</div>
</lightning-card>
```
- no js do filho, recebemos com @api:
```js
@api progressValue
```
- e por fim, no html filho renderizamos os dados recebidos:
```html
<lightning-progress-bar value={progressValue} size="large"></lightning-progress-bar>
``` 

**OBS:** Exemplos dessa aula *p2cProgressComponent* e *p2cParentComponent* passam dados do componente pai para o filho após ocorrida uma **ação** no componente pai
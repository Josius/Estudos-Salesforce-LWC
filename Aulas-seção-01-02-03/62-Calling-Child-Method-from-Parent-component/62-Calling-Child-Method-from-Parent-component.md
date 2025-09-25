# Calling Child Method from Parent component
- Chamar método do componente filho a partir do componente pai
- O componente filho terá um método público
- Neste exemplo utilizaremos um botão para chamar o método do componente filho, então, no componente filho temos uma barra de deslizamento horizontal, que tem como valor inicial o valor na variável *val* e chama o método *changeHandler* ao ser alterada:
```html
<div class="slds-var-m-around_medium">
	<lightning-slider label="Volume" value={val} onchange={changeHandler}></lightning-slider>
</div>
```
- no js do componente filho temos *val*, o método *changeHandler* e um método público *resetSlider* usando a notação *@api* que atribui a variável *val* o valor de 50;
```js
val = 20
changeHandler(event){ 
	this.val = event.target.value
}

@api resetSlider(){ 
	this.val = 50
}
```
- por sua vez, no html do componente pai temos o componente filho embutido e também o botão para resetar o valor da variável *val*; o botão chama o método *handleClick* do componente pai que por sua vez chama o método público *resetSlider* do componente filho:
```html
<lightning-button variant="brand" label="Reset Slider"
onclick={handleClick}></lightning-button>
<c-p2c-slider-component></c-p2c-slider-component>
```
```js
handleClick(){
	this.template.querySelector('c-p2c-slider-component').resetSlider()
}
```
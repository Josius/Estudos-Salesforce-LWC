# Shared CSS
No seguinte caso:
- 2 componentes lwc, cada um é semelhante ao outro, usando semelhante arquivos html e css:
```html
<!-- Componente 1 -->
<template>
    <lightning-card title="style one">
		<div class="slds-var-m-bottom_medium">
			<div class="wrapper">
				<div class="skills css">80%</div>
			</div>
		</div>
	</lightning-card>
</template>
<!-- Componente 2 -->
<template>
    <lightning-card title="style two">
		<div class="slds-var-m-bottom_medium">
			<div class="wrapper">
				<div class="skills html">90%</div>
			</div>
		</div>
	</lightning-card>
</template>
```
```css
/* Componente 1 */
.wrapper{
    width:100%;
    background-color: #ddd;
}
.skills{
    text-align: right;
    padding-top:10px;
    padding-bottom:10px;
    color:white;
}
.css{
    width:80%;
    background-color: #2196f3;
}
/* Componente 2 */
.wrapper{
    width:100%;
    background-color: #ddd;
}
.skills{
    text-align: right;
    padding-top:10px;
    padding-bottom:10px;
    color:white;
}
.html{
    width:90%;
    background-color: #4caf50;
}
```
- Podemos diminuir a quantidade de código ao centralizar o css comum entre esses dois componentes em um novo componente, então teríamos:
  - componente principal de css (cssLibrary) - contendo somente o css comum entre os componentes 1 e 2
  - componente 1 - contendo somente css referente a si próprio
  - componente 2 - contendo somente css referente a si próprio
- Com os componentes 1 e 2 importam o css do componente de css
```css
@import 'c/cssLibrary';
.html{
    width:90%;
    background-color: #4caf50;
}
.abc{
    color:red;
}
```
**NOTA:** o novo componente não precisa dos arquivos html e js, somente do css e do xml, este último não precisa estar exposto
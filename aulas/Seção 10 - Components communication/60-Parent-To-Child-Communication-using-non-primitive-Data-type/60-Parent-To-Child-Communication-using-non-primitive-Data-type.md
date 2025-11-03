# Parent To Child Communication using non primitive Data type
- Passando dados do LWC pai para o filho, dados esses que são dados complexos, ou que não são primitivos, como um array.
- Então, podemos ter um array no js do componente pai:
```js
carouselData=[
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header:"First Card",
            description:"First Description"
        },...]
```
- passamos para o componente filho por meio do html pai:
```html
<c-p2c-carousel-component carousel-details={carouselData}></c-p2c-carousel-component>
```
- no js do filho, recebemos com @api:
```js
@api carouselDetails
```
- e por fim, no html filho renderizamos os dados recebidos:
```html
<lightning-carousel disable-auto-scroll>
	<template for:each={carouselDetails} for:item="item">
		<lightning-carousel-image
		key={item.header}
		src ={item.src}
		header ={item.header}
		description ={item.description}>
	</lightning-carousel-image>
	</template>
</lightning-carousel>
```
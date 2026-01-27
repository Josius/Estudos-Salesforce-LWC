# Memory Game
### Lightning Page Creation
- Setup -> Quick Find:Lightning App Builder -> New -> App Page -> preencher label -> One Region -> Done -> Save -> Activate -> Aba Lightning Experience: escolher Lightning App -> Add Page to app -> Save
### LWC Component Creation
### Loading static resources
### renderCallback
- Criar pelo VSCode e fazer deploy na org
- Uma explicação sobre o CSS inicial
  - *display: flex* -> faz a largura do componente ocupar a largura do seu conteúdo
  - *justify-content: center* -> aloca o componente no centro da página
  - *align-items: center* -> itens ao centro
  - *flex-direction: column* -> flex direction fica em direção a coluna
```css
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
```
- [Fonte Awesome](https://fontawesome.com/) - biblioteca de ícones
- Add fontawesome.zip aos **Static Resources**
  - Setup -> Quick Find:Static Resources -> New -> preencher Name, escolher arquivo .zip, Cache Control: public -> Save
- Buscar o Static Resource no LWC:
```js
import {loadStyle} from 'lightning/platformResourceLoader'
import fontawesome from '@salesforce/resourceUrl/fontawesome'
isLibLoaded = false
renderedCallback(){
	if(this.isLibLoaded){
		return
	} else {
		loadStyle(this,fontawesome+'/fontawesome/css/font-awesome.min.css').then(()=>{
			console.log("loaded successfully")
		}).catch(error=>{
			console.error(error)
		})
		this.isLibLoaded = true
	}
}
```
- **loadStyle** carregará o CSS
- **fontawesome** carregará a referência do arquivo .zip
- **isLibLoaded** evita que a biblioteca seja carregada várias vezes
- sempre que carregamos uma biblioteca de terceiros usamos um **renderedCallback**, pode-se carregar em outro lugar, mas o **renderedCallback** nos garante que sempre que o HTML for carregado c/êxito o seu conteúdo estará lá. Usamos também uma flag **isLibLoaded** para evitar que a biblioteca seja carregada inúmeras vezes.
- no html é add a seguinte tag para renderizar o ícone de seta circular, o qual é recuperado do arquivo **fontawesome**:
```html
<i class="fa fa-repeat" aria-hidden="true"></i>
```
### Looping in HTML
- é criado um array contendo os 16 itens para o jogo
```js
cards= [
        {id:1, listClass:"card", type:'diamond', icon:'fa fa-diamond'},
		...
```
- e no html é renderizado:
```html
<section class="game-panel">
<ul class="deck card-deck grid-container">
	<template for:each={cards} for:item="card">
		<li class={card.listClass} type={card.type} key={card.id} onclick={displayCard}>
			<i class={card.icon}></i>
		</li>
	</template>
</ul>
```
### CSS Grid Creation
### Adding and removing classes
- com **.grid-container** é criada uma grade 4X4 que conterá todos os ícones; com **.grid-container .card** é configurado o estilo das cartas, com cores, tamanho, formato e ícones escondidos; com o método **displayCard** os ícones são mostrados ao clicar na carta; com **.grid-container .card.open** é criada a animação de virar a carta; **.grid-container .card.show** mostra o ícone ao virar a carta; **.grid-container .card.disabled** desabilita virar a carta; com a lógica sobre **openedCards =[]** virar duas cartas por vez; com a lógica sobre **matchedCard=[]** comparar cartas e usar método **matched()** ou **unmatched()**, assim como **.grid-container .card.match** e **.grid-container .card.unmatched**;
### Timing Functions (setInterval)
### Timer start and stop
- contagem de tempo, reiniciar tempo **timer()**
- **shuffle()** para mudar a ordem dos ícones/cartas

### querySelector
### SLDS Modal
### getter
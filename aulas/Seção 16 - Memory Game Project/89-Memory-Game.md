# Memory Game
### Lightning Page Creation
- Setup -> Quick Find:Lightning App Builder -> New -> App Page -> preencher label -> One Region -> Done -> Save -> Activate -> Aba Lightning Experience: escolher Lightning App -> Add Page to app -> Save
### LWC Component Creation
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
- Add fontawesome.zip aos Static Resources
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
- sempre que carregamos uma biblioteca de terceiros usamos um **renderedCallback**, pode-se carregar em outro lugar, mas o **renderedCallback** nos garante que sempre que o HTML for carregado c/êxito o seu conteúdo estará lá
### CSS Grid Creation

### Adding and removing classes
### querySelector
### Loading static resources
### renderCallback
### Looping in HTML
### Timing Functions (setInterval)
### Timer start and stop
### SLDS Modal
### getter
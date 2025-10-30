# Third Party JavaScript Libraries in LWC
- Muito semelhante a abordagem anterior:
### Configuração na Org
- Em *Setup -> Static Resources -> New -> Name:<nome_do_recurso> Description:<descrição_do_recurso> File:<escolher_arquivo> Cache Control:<Public> -> Save*
- Usaremos *nome_do_recurso* para baixar o arquivo js

### Static Resources
- importar o recurso estático:
```js
import resourceName from '@salesforce/resourceUrl/resourceName'
```
- importar métodos de plataformResourceLoader module:
```js
import { loadScript } from '@lightning/plataformResourceLoader'
isLibLoaded = false
renderedCallback(){ 
	if(this.isLibLoaded){ 
		return
	} else {
		loadScript(Reference to the component, fileUrl): Promise
		//loadScript(this, MOMENT+'/moment/moment.min.js')
		...
		this.isLibLoaded = true
	}
}
setDateOnScreen(){
	...
}
```
**NOTA 0:** no exemplo é criado uma variável booleana para impedir que o método *renderedCallback* carregue várias vezes a biblioteca se alguma ação for executada na tela
**NOTA 1:** no exemplo é usado *renderedCallback*, porque estamos carregando um arquivo e queremos executar uma ação e esta ação só deve ser executada após o completo carregamento do HTML. Logo, o *renderedCallback* nos garante que a renderização do componente foi concluída.
**NOTA 2:** veja no exemplo que em *Reference to the component* usa-se *this*, para referênciar o próprio e em *fileUrl* navega-se pelo caminho do *.zip* até o arquivo desejado
**NOTA 3:** não estamos usando um *Promise.all* pq estamos carregando somente um arquivo, se fossem vários, faria sentido usar
**OBS 0:** ver código exemplo completo no código
**OBS 1:** no exemplo, usa-se *moment.zip*, uma biblioteca js para conversão de tempo
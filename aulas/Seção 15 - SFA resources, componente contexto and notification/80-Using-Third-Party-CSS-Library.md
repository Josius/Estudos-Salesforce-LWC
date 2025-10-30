# Using Third Party CSS Library
- Muito semelhante a abordagem anterior:
### Configuração na Org
- Em *Setup -> Static Resources -> New -> Name:<nome_do_recurso> Description:<descrição_do_recurso> File:<escolher_arquivo> Cache Control:<Public> -> Save*
- Usaremos *nome_do_recurso* para baixar o arquivo css

### Static Resources
- importar o recurso estático:
```js
import resourceName from '@salesforce/resourceUrl/resourceName'
```
- importar métodos de plataformResourceLoader module:
```js
import { loadStyle } from '@lightning/plataformResourceLoader'
//loadStyle(Reference to the component, fileUrl): Promise
Promise.all([
	loadStyle(this, ANIMATE+'/animate/animate.min.css'), 
	loadScript(this, MOMENT+'/moment/moment.min.js')
])
```
**NOTA 0:** usamos o mesmo componente da aula anterior neste exemplo, o *ThirdPartyFiles*
**NOTA 1:** neste exemplo estamos usando *Promise.all* pq estamos efetuando duas operações assíncronas	
**OBS 0:** ver código exemplo completo no código
**OBS 1:** no exemplo, usa-se *animate.zip*, uma biblioteca CSS para animação do texto



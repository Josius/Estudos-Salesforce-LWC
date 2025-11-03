# Images from Static Resources
### Configuração na Org
- Em *Setup -> Static Resources -> New -> Name:<nome_do_recurso> Description:<descrição_do_recurso> File:<escolher_a_img> Cache Control:<escolher> -> Save*
- Usaremos *nome_do_recurso* para baixar a img

### Static Resources
- podem ser arquivos *.zip, .jar, imagens, .css, .js* e outros
```js
import myResource from '@salesforce/resourceUrl/resourceReference'
```
- **myResource**: pseudônimo/referência ao recurso estático
- **resourceReference**: nome do recurso estático
- o nome de um recurso estático pode conter somente *underscores, caracteres alfanumérios, necessário ser único na org, precisa começar com uma letra, não usar espaços e não terminar com underscore, também não pode conter 2 underscores sequidos*
**OBS:** ver código exemplo completo no código

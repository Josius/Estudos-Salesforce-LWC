# Toast Notification
- Um popup que alerta o usuário com alguma informação
```js
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
const event = new ShowToastEvent({ 
	title: "Toast Title",
	message: "Toast Message",
	variant: "Toast Variant", //success, info, warning ou error
})
this.dispatchEvent(event)
``` 
**NOTA 0**: no exemplo completo demonstra uma forma de incorporar URLs e dados para o no toast no Salesforce; ver método de *Success*.
**NOTA 1**: há também a configuração *mode* com as opções: **dismissable**(padrão) - 3 segundos de visualização ou até o usuário fechar; **pester** - visível por 3 sgundos; **sticky** - mantém visível até o usuário fechar
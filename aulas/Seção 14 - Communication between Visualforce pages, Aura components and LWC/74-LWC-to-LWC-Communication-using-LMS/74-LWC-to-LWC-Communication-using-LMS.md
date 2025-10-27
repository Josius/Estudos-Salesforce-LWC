# LWC to LWC Communication using LMS
- Para efetuar uma comunicação entre componentes LWCs que não tenham uma hierárquia de pai-filho, seguimos estes passos:
1. Importar o message channel no arquivo js do LWC
```js
import qualquerNomeAqui from "@salesforce/messageChannel/nomeNaTag_masterLabel__c"
// exemplo:
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
```
2. Importar LMS API: No exemplo do código, temos o componente A que se comunicará/publicará uma mensagem para outro componente
```js
import {MessageContext, publish} from 'lightning/messageService'
```
3. Usar *MessageContext Wire Adapter* para pegar informação de todos LWCs usando LMS
```js
import { LightningElement, wire } from 'lwc';
@wire(MessageContext)
    context
``` 
4. Publicar a mensagem
```js
//publish(referência a mensagem que será enviada, referência ao messageChannel, a mensagem)
publish(this.context, SAMPLEMC, message)
``` 
5. No outro componente LWC, como no 1º, importamos o message channel, o LMS API para se inscrever/desinscrever e outras funções, MessageContext Wire Adapter
```js
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import {subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe} from 'lightning/messageService';
recievedMessage
subscription
@wire(MessageContext)
context
subscribeMessage(){
	this.subscription= subscribe(this.context, SAMPLEMC, (message)=>{this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
}
unsubscribeMessage(){
	unsubscribe(this.subscription)
	this.subscription = null
}
```
Exemplos completos nos LWCs *LmsComponentA* e *LmsComponentX*
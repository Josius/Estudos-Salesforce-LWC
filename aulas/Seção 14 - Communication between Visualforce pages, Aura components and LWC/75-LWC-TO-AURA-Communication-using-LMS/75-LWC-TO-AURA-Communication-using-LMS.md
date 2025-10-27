# LWC TO AURA Communication using LMS
- Para efetuar uma comunicação entre Aura e componente LWC seguimos estes passos:
1. No componente Aura add implements, access e o messageChannel:
	- type: o próprio LMS
	- onMessage: sempre que uma msg é passada, esse escutará a mensagem
```html
<aura:component implements="flexipage:availableForAllPageTypes" access="global">
	<lightning:messageChannel
		type="SampleMessageChannel__c"
		aura:id="SampleMessageChannel"
		onMessage="{!c.handleMessage}"
		scope="APPLICATION"	
	/>
<aura:component>
```
2. Em seguida, modificamos o arquivo **Controller.js* com o método que irá lidar com a mensagem:
	- component: faz referência ao próprio componente Aura
	- message: a msg escutada/recebida
```js
handleMessage:function(component, message){
	if(message != null && message.getParam("lmsData") !=null){
		component.set("v.messageRecieved", message.getParam("lmsData").value)
	}
}
```
**OBS:** no exemplo completo do código, há além do recebimento da mensagem, a publicação desta no Aura, atributos para databind, publicação de msg oriunda do componente Aura e recebimento pelo componente X do LWC
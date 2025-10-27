# LWC, AURA and VisualForce Page Communication using LMS
1. configuração do visualforce page:
   - após a criação do visualforce page, add *lightningStylesheets="true"* para acessar as classes lightning:
   - no exemplo do código é add 3 tags, *<apex:slds/>*,  *div* para o html e *script* para o código js
2. para configurar a comunicação usando LMS no visualforce page:
   - pegar a referência do messageChannel com uma variável global
   - permitir publish/subscribe/unsubscribe
```html
<apex:page lightningStylesheets="true">
    <apex:slds/>
    <div class="slds-scope">
        <!-- ver html completo no exemplo-->
    </div>
    <script>
    	let SAMPLEMC  ="{!$MessageChannel.SampleMessageChannel__c}"
		sforce.one.publish(SAMPLEMC, message)
		subscriptionToMC = sforce.one.subscribe(SAMPLEMC, msgHandler, {scope:"APPLICATION"})
		sforce.one.unsubscribe(subscriptionToMC)
		//	ver código completo no exemplo
    </script>
</apex:page>
```
3. expor visualforce page à lightning page:
   - Setup -> Visualforce Pages -> Edit da visualforce page criada -> clicar na checkbox *Available for Lightning Experience, Experience Builder sites, and the mobile app* -> save
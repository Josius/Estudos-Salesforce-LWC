# Aura Coexistence
- Aura e LWC podem se trabalhar juntos
- Aura pode conter LWC, contudo, o oposto não se aplica. LWCs não podem conter Aura.
- Para isso, aplicamos a tag <lightning:[componente]> e passamos o componente LWC:
```html
<aura:component implements="flexipage:availableForAllPageTypes">
<lightning:card title="Aura to LWC communication">
    <div class="slds-p-around_medium">
	    <c:lwcAuraCommunication></c:lwcAuraCommunication>
    </div>
</lightning:card>
</aura:component>
```
- No exemplo completo, temos como tranferir os dados do Aura para o LWC usando **@api** e configurações no Aura; 

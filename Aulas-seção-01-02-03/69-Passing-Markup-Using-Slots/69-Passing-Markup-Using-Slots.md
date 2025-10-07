# Passing Markup Using Slots
- Slot é usado para passar HTML para dentro de outro componente
- <slot></slot> marcação usada para pegar HTML passada por um componente pai
- **NÃO** é possível passar um componente **Aura** em um slot
- Há dois tipos de slots:
  - Named slots exemplo: <slot name="user"></slot>, usado para renderizar no campo correto e evitar duplicidade em outros slots
  - Unnamed slots exemplo: <slot></slot>

## Vamos ver como passar **HTML** do componente pai para o componente filho
No componente pai incorporamos o componente filho, e em cada elemento HTML nomeamos o slot, como em *slot="first"*
```html
<div class="slds-p-around_medium">
    <c-slot-child-demo>
        <p class="slds-text-color_success" slot="first">My Name is Salesforcetroop</p>
        <p class="slds-text-color_error" slot="second">My Age is 25</p>
        <p slot="footer"> I am footer</p>
    </c-slot-child-demo>
</div>
```
No componente filho recebemos o que foi passado pelo componente pai com *name="first"*:
```html
<div><slot name="first"></slot></div> <!--named slots-->
```
**NOTA:** Como bônus, no componente filho há uma função para remover o footer se não houver elemento para renderizar

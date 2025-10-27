# Component Composition
- **Composição** é a adição de componentes dentro do corpo de outro componente
- constrói-se componentes complexos a partir da junção de componentes mais simples
### Referenciando componentes filhos em componentes pai
- ao incorporar no componente pai os filhos, precisa somente utilizar o nome do componente em letras minúsculas, hífen e um 'c' antes do nome, como abaixo:
```html
<!--childComponent--> <c-child-component></c-child-component>
<!--childComponentDemo--> <c-child-component></c-child-component-demo>
<!--sampleDemoLWC--> <c-sample-demo-l-w-c></c-sample-demo-l-w-c>
```
- precisamos expor ao SF somente o componente pai, os componentes filhos como já estão incorporados no pai, não é necessário
- necessário fazer deploy de todos os componentes, tanto pai quanto filhos
# Shadow DOM
### O que é o DOM (Document Object Model)
- API para documentos HTML e XML
- Define a estrutura lógica de documentos
- Define a forma como o documento é acessado e manipulado
- é a representação estrutural da árvore de uma página web
- um arquivo html é renderizado pelo navegador e este cria uma [árvore de elementos](https://en.wikipedia.org/wiki/Document_Object_Model) HTML
- para acessar: *F12 -> Console -> digite: document*

### O que é o Shadow DOM
- quando incorporamos um componente a outro componente, estamos incorporando um [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM) ao DOM
- traz o conceito de encapsulação ao HTML, permitindo vincular um DOM oculto e separado a um elemento
- não permite consultas ao elemento filho a partir do pai
- seguindo a encapsulação, alterações via CSS no DOM não alterarão no Shadow DOM
- propagação de eventos também não surtem efeitos
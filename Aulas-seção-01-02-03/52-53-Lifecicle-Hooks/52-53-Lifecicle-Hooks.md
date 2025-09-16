# Lifecicle Hooks
São métodos de retorno de chamadas (callbacks) acionados em uma fase específica do ciclo de vida da instância do componente. Há 3 tipos de fases no ciclo de vida do componente:
## Mounting Phase
### constructor()
- invocado quando a instância de um componente é criado
- precisa chamar super() dentro deste método
- neste ponto, o componente ainda não está pronto
- para acessar host element, usar this.template
- este método fluí do elemento pai para o filho
- não podemos acessar elementos filhos no corpo do componente pq eles ainda não existem
- não add atributos ao host element no construtor
### connectedCallback()
- chamado quando o elemento é inserido no documento
- este método fluí do elemento pai para o filho
- não podemos acessar elementos filhos no corpo do componente pq eles ainda não existem
- para acessar host element, usar this.template
- **use para:** tarefas de performance de inicialização: fetch data, set up caches, or listen events(como o PUB-SUB) 
- **NÃO use para:** mudar o estado de um componente, tal como carregar valores ou setar propriedades. Use getters e setters.
### render()
### renderedCallback()
- este método é disparado quando a renderização do componente está completa
- pode ser disparado mais de uma vez
- fluí da criança para o pai
- quando um componente é rerenderizado, todas as expressões usadas no template são recalculadas
- **NÃO use para:** mudar o estado ou atualizar a propriedade de um componente
- **NÃO use para:** não atualize a propriedade de um objeto configurado com *wire adapter* no método renderedCallback(), isso resulta num loop infinito
## Unmounting Phase
### disconnectedCallback()
- disparado quando um componente é removido do DOM
- fluí do pai para o filho
- este método é específico do Lightning Web Components, ele não é do HTML
## Error Phase
### errorCallback()
- é chamado quando um componente lança um erro
- o *error argument* é um objeto de erro nativo do JS, e o *stack argument* é uma string
- este método é específico do Lightning Web Components, ele não é do HTML
### errorCallback()
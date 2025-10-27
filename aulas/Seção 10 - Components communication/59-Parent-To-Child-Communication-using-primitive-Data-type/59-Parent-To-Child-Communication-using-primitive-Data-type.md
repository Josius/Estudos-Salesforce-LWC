# Parent To Child Communication using primitive Data type
- anteriormente tratamos as propriedade localmente, agora vamos torná-las públicas para que outros componentes possam ouvir ou capturar a propriedade
## @api decorator
- permite tornar um campo/propriedade ou método público
- permite expor a propriedade
- um componente dono que usa o componente em seu HTML pode acessar as propriedades públicas do componente via atributos do HTML 
- propriedades públicas são reativas por natureza e se o valor da propriedade mudar, o template do componente renderiza novamente

### Entendendo
- temos dois componentes, o Pai e o Filho.
- no html-pai imbutimos o html-filho passando algumas variáveis no próprio html-pai (variáveis: message, card-heading, number, is-valid)
- no js-filho, add o decorator @api para cada variável que o html-pai passou para o html-filho (variáveis: message, cardHeading, number, isValid)
- em seguida, no html-filho passamos as variáveis do js-filho (variáveis: {number} {message} {isValid})

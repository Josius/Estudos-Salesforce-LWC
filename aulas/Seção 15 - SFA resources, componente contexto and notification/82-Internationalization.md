# Internationalization
LWC possui propriedades de internacionalização que permitem adaptar componentes para usuários da WEB, através de linguagens, moedas e fusos horários. Permite alterar a interface de usuário com base no idioma, moeda ou fuso horário de um país. 
```js
import internationalizationPropertyName from '@salesforce/i18n/internationalizationProperty
/* Exemplos:
import LOCALE from '@salesforce/i18n/locale'
import CURRENCY from '@salesforce/i18n/currency'
*/'
```
**NOTA 0:** no exemplo de código, com base na localidade e na moeda, o nº 6575557.86 é exibido com o sinal da moeda e com ',' e '.' nos locais apropriados. Por exemplo: R$ 6.575.557,86. Também é possível muda a direção do texto, entre outras propriedades alteráveis
**NOTA 1:** também é possível alterar essa visualização mudando o código, trocando o *LOCALE* ou a *CURRENCY*
**OBS:** ver código exemplo completo no código


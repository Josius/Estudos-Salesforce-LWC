# NOTES
### Arquivo helloWorld.js-meta.xml
- campo **isExposed** está sempre *false*, trocar para *true* para ficar disponível para um página
- após isso, necessário expecifigar os *targets*:
	```html
	<targets>
		<target>lightning__AppPage</target>
	</targets>
	```
- também há a possibilidade de usar o LWC em um Omniscript, para isso usar:
	```html
	<isExposed>true</isExposed>
    <runtimeNamespace>name_space</runtimeNamespace> 
	<targets>
		<target>lightning__RecordPage</target>
		<target>lightning__AppPage</target>
		<target>lightning__HomePage</target>
	</targets>
	```
- **name_space** pode ser vlocity_cmt ou omniscript ou outro, precisa verificar na org
### Outros arquivos/pastas
- myComponent.css -> arquivo de estilo, 1 por componente
- myComponent.svg -> arquivo de ícones gráficos vetoriais/escalares personalizados, 1 por componente
- moreSharedCode.js -> arquivo para exportar métodos, constantes, dados estáticos para arquivo principal myComponent.js
- \_\_teste__/myComponent.test.js -> pasta/arquivo para executar testes do componente
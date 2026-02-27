# 126 getRecordUi adapter
Usar este **wire adapter** para obter informações do layout, metadados e dados para construir a UI para um ou mais registros.
**OBS:** não confundir com **getRecord**, este fornece dados somente sobre os registros, já o **getRecordUi** fornece outro tipo de dados(descritos acima).
```js
import { LightningElement, wire } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';

export default class Example extends LightningElement {
    @wire(getRecordUi, { recordIds: string || string[], layoutTypes: string || string[],
		modes: string || string[], optionalFields: string || string[] })
    propertyOrFunction;
}
```
- **layoutTypes** suporta dois valores, **Compact** ou **Full**
- **modes** usado com layout, valores suportados são **Create, Edit** e **View**
- **optionalFields** evita de gerar um **error** se o campo não for acessível ao usuário, se não for acessível, ele simplesmente não aparece
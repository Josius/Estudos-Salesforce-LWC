# 115 Introduction
Com o **Base Lightning Components** é possível obter dados do Salesforce, é uma abordagem fácil porém sem muito controle sobre os dados e não há muita personalização. Portanto, sempre que precisar fazer alguma personalização nos dados ou buscar dados brutos, como no caso de picklist, info de registros ou objetos, pode-se usar *wire adapters* e *functions*.
No LWC há o módulo **lightning/ui*Api**, o qual fornece o *wire adapters* e *functions JS*. Ele é construído sobre a *User Interface API*, a qual suporta objetos personalizados e padrões. Temos 4 módulos, são eles:
- **lightning/uiObjectInfoApi** - usado para obter metadados de objetos e valores de picklist
- **lightning/uiListApi(Beta)** - recuperar registros e metadados para uma *list view*
- **lightning/uiRecordApi** - um muito importante, usado para criar, recuperar, atualizar, excluir, atualizar o registro sem usar Apex
- **lightning/uiAppApi** - usado para obter dados e metadados dos apps exibidos na interface de usuário do Salesforce
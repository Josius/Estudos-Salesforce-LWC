# Navigation Service
### Types of Navigation Service
- Navigate to Home Page
- Navigate to Chatter
- Navigate to New Record
- Navigate to New Record with Default Values
- Navigate to List View
- Navigate to Files
- Navigate to Record Page in View and Edit Mode
- Navigate to Tab
- Navigate to Record Relationship Page
- Navigate to External Web Page
- Navigate to LWC Component
- Navigate to AURA Component
- Navigate to VF pages
- Navigate to Current Page Reference

### Steps to Use Navigation Service
Importar:
```js
import { NavigationMixin } from 'lightning/navigation';
```
Aplicar a função de NavigationMixin na classe base do componente:
```js
export default class MyCustomElement extends NavigationMixin(LightningElement) {}
```
Chamar o navigation service:
```
[NavigationMixin.Navigate](pageReference,[replace])
```
- pageReference: objeto que define a página, p.e.: qual tipo de pág., qual o alvo, atributos para transmitir, estado da pág.
- replace: valor booleano, *falso* por padrão, caso contrário *pageReference* substitui a entrada existente no histórico do navegador.

### PageReference Types
- App
- Lightning Component
- Knowledge Article
- Login Page
- Named Page (Communities)
- Named Page (Standard)
- Navigation Item Page
- Object Page
- Record Page
- Record Relationship Page
- Web Page
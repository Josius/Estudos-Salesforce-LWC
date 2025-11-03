# Check Permissions
- Verificar as permissões diretamente no LWC sem uso de código Apex
- Dois tipos de permissões podemos ver:
  - user permission
  - custom permission
```js
import <aliasUserPermission> from '@salesforce/userPermission/<PermissionName>'
import <aliasCustomPermission> from '@salesforce/customPermission/<PermissionName>'
```
### User Permission
- No exemplo é criado um profile (*Setup -> Quick Find:Profiles -> New Profile*)
- Algumas *User Permissions* são alteradas (*Em profile (com Enhanced Profile User Interface desabilitado) -> General User Permissions*)
- O profile é atribuído a um usuário

### Custom Permission
- É criada uma custom permission (*Setup -> Quick Find:Custom Permissions -> New*)
- É criado um permission set (*Setup -> Quick Find:Permission Sets -> New*)
- Com a permission set criada, atribuímos a custom permission ao permission set (*Na pág da Permission Set: Custom Permission -> Edit -> selecionar a custom permission -> movê-la para direita -> Save*)
- Atribuir a Permission Set ao usuário (*Na pág da Permission Set, clicar no botão: Manage Assigments -> Add Assigments -> selecionar usuário -> atribuir a Permission Set*)

- No código js:
```js
import hasViewAllData from '@salesforce/userPermission/ViewAllData'
import myCustomPermission from '@salesforce/customPermission/show_details'
```
- No código html é criada uma visualização das permissões
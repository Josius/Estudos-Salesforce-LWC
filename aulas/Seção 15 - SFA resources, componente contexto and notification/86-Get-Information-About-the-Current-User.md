# Get Information About the Current User
- Usamos um *scoped module* o qual possuí suporte somente para duas propriedades:
	1. **Id**: número identificador do usuário
	2. **isGuest**: valor booleano que indicase o usuário é um usuário convidado ou não
```js
import ID from '@salesforce/user/Id'
import IS_GUEST from '@salesforce/user/isGuest'
```
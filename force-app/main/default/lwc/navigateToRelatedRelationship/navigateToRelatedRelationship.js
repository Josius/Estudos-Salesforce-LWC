import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToRelatedRelationship extends NavigationMixin(LightningElement) {
    navigateToRelatedList(){ 
        this[NavigationMixin.Navigate]({ 
            type:'standard__recordRelationshipPage',
            attributes:{ 
                recordId:'001Hp00002kD9OKIA0',
                objectApiName:'Account',
                relationshipApiName:'Contacts',
                actionName:'view'
            }
        })
    }
}
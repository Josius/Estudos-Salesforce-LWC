import { LightningElement, wire } from 'lwc';
import {getObjectInfo} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetObjectInfoDemo extends LightningElement {

    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfo

	@wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfoFunction({data, error}){
		if(data){
			console.log('data', data)
		}
		if(error){
			console.log('error', error)
		}
	}
}
import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
	fullName = "Zero to Hero";
	title = "Aura";
	changeHandler(event){
		this.title = event.target.value;
	}

	address={
		city: "Melbourne",
		country: 'Australia',
		postalCode: 3008
	}
	
	trackHandler(event){
		this.address = {...this. address, "city": event.target.value};
	}
}
import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
	fullName = "Zero to Hero";
	users = ["a", "b", "c"];
	obj = {
		name: "Jorge",
		age: "25"
	}
	title = "Aura";
	changeHandler(event){
		this.title = event.target.value;
	}
}
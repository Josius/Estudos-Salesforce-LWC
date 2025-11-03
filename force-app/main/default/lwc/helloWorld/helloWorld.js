import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
	users = ["John", "Paul", "Mary", "Jane", "Mark", "David", "Gloria", "Linda", "Mike", "Cynthia"];
	num1 = 10;
	num2 = 20;

	get firstUser(){
		return this.users[0].toUpperCase();
	}
	get multiply (){
		return this.num1 * this.num2;
	}
}
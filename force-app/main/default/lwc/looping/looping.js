import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
	carList = ["Ford", "BMW", "Fiat", "Audi", "Porsche", "Ferrari"];

	ceoList = [
		{
			id:1,
			company: "Google",
			name: "Sundar Pichau"
		},
		{
			id:2,
			company: "Apple",
			name: "Tim Cook"
		},
		{
			id:3,
			company: "Facebook",
			name: "Mark Zuckerberg"
		},
		{
			id:4,
			company: "Microsoft",
			name: "Bill Gates"
		},
		{
			id:5,
			company: "Amazon",
			name: "Jeff Bezos"
		}
	]
}
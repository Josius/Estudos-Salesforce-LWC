import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
	selected = {};
	correctAnswers = 0; //to show the number of correct answers
    isSubmitted = false; // use to show the result
	myQuestions=[
        {
            id:"Question1",
            question:"Which one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which of the file is invald in LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"WHich one of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]
	
	changeHandler(event) {
		// const name = event.target.name;
		// const value = event.target.value;
		// as duas atribuições acima podem ser feitas com uma única atribuição abaixo
		const {name, value} = event.target;
        this.selected={...this.selected, [name]:value};
		this.selected = {...this.selected, [name]:value}
	}
	//form submit handler
    submitHandler(event){
        event.preventDefault() // evita atualizar a página ao clicar no botão Submit
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true
		console.log("this.correctAnswers", this.correctAnswers);
    }
    //form reset handler
    resetHandler(){
        this.selected ={}
        this.correctAnswers=0
        this.isSubmitted = false
    }
	//used for disabling the sumbmit button
	// 'Object.keys(this.selected).length' -> verifica a qtd de respostas selecionadas e '=== this.myQuestions.length' -> compara com qtd total de repostas
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
    // for applying dynamic styling to our result
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
            'slds-text-color_success':'slds-text-color_error'}`
    }
}
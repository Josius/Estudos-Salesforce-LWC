//Problema que Arrow Function resolve
let obj = {
  name: 'nikhil',
  getName:function(){
    console.log(this.name)
  }
}
obj.getName()
//o problema começa quando a função se torna um aninhamento
let obj2 = {
  name1: 'nikhil2',
  getName:function(){
    console.log(this.name1) //nikhil2
    const fullName = () =>{
      console.log(this.name1) //nikhil2
      console.log('my full name is ' + this.name1 + ' jkarek') //my full name is nikhil2 jkarek
    }
    fullName()
  }
}
obj2.getName()

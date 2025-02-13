document.addEventListener("mousemove", handler)
function handler(){
  document.querySelector(".demo").innerHTML = Math.random()//sempre que mover o mouse, add um nº aleatório dentro da div com classe demo
}
//removeHandler: quando clicar no botão, removerá a função handler e não gerará nºs
function removeHandler(){
  document.removeEventListener("mousemove", handler)
}
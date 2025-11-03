# Event
- Ação que acontece no navegador, e este avisa vc, no qual vc pode responder
- **ex:** clicar num botão gera um evento e este evento pode responder ao mostrar uma caixa de alerta na tela
- **Event Handler:** é um bloco de código que executará quando o evento acontecer; também conhecido como *Event Listener*

## Dois modos de adicionar evento
1. **HTML Event Handler Attribute** - quando add evento através do HTML, Event sempre começa com **on**: *onclick, onchange, onkeyup*
```html
<!-- HTML -->
<button onclick="firstFunction()">Click</button>
```
```js
//JS
function firstFunction(){
  console.log("HUrrr")
}
```
1. **Event Listener** - dois métodos principais para lidar com *registering/deregistering* event listeners
   1. **addEventListener():** registra um *event handler*
    ```html
    <!-- HTML -->
    <button>Click</button>
    ```
    ```js
    //JS
    function firstFunction(){
      console.log("HUrrr")
    }
    let btn = document.querySelector("button")
    btn.addEventListener("click", firstFunction)//click=nome do evento;
    ```
   2. **removeEventListener():** remove um *event handler*
    ```html
    <!-- HTML -->
    <button onclick="removeHandler()">Click</button>
    <div class="demo"></div>
    ```
    ```js
    //JS
    document.addEventListener("mousemove", handler)
    function handler(){
      document.querySelector(".demo").innerHTML = Math.random()//sempre que mover o mouse, add um nº aleatório dentro da div com classe demo
    }
    //removeHandler: quando clicar no botão, removerá a função handler e não gerará nºs
    function removeHandler(){
      document.removeEventListener("mousemove", handler)
    }
    ```
# Event Propagation
- explica a ordem na qual os eventos são recebidos na página do elemento onde o evento ocorreu e propagagou através da árvore DOM
- há 2 modelos de eventos principais:
## Event bubbling
- Event bubbling ocorre de baixo para cima, mais usado em LWC
- um evento inicia-se no mais específico elemento (*ex: botão*) e então fluí para cima em direção ao elemento menos específico (*ex: document*)
- *bubbling* significa que ao clicar no botão, é chamado automaticamente um função de div, em seguida de body, html e por fim document
- no html abaixo, ao clicar no elemento filho, ele chamará todos os eventos pais
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>First HTML page</title>
  </head>
  <body>
    <form onclick="alert('i am a form')">
      I am a form
      <div onclick="alert('i am a div')">
        I am a div
        <p onclick="alert('i am a p')">
          I am a p
        </p>
      </div>
    </form>
    <script src="src/script.js"></script>
  </body>
</html>
```
## Event Capturing
- Event Capturing ocorre de cima para baixo em tempo real

# Custom Event
- podemos criar nosso próprio evento personalizado usando CustomEvent constructor
- Syntax: *new CustomEvent('eventName', {options})*
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>First HTML page</title>
  </head>
  <body>
    <button onclick="callCustomMethod()">click</button>
    <script src="src/script.js"></script>
  </body>
</html>
```
```js
document.addEventListener('hello', function(data){
  console.log('hello has called and send ', data.detail)
})

function callCustomMethod(){
  let event = new CustomEvent('hello', {
    detail:{name:'nikhil'}
  })
  document.dispatchEvent(event)
}
```
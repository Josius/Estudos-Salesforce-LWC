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


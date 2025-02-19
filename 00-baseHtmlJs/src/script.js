document.addEventListener('hello', function(data){
  console.log('hello has called and send ', data.detail)
})

function callCustomMethod(){
  let event = new CustomEvent('hello', {
    detail:{name:'nikhil'}
  })
  document.dispatchEvent(event)
}
let add_btn = document.querySelector('#add_btn')
add_btn.addEventListener('click', adicionar)
let array = []

function adicionar(){

let txt = document.querySelector('#txt').value
let date = document.querySelector('#date').value
array.push(txt)
console.log(array)
txt = ''
}
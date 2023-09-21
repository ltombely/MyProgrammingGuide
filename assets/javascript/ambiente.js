let array = []
let todoList = document.querySelector('#todo-list')

function add(){
    let text = document.querySelector('#text').value
    let date = document.querySelector('#date').value

    let object = {
        task: text,
        time: date
    }

    object.time = object.time.replace(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/, '$3/$2/$1' )
    array.push(object)

    showList()

        
}

function showList(){


    
}


function toDelete(param){



}

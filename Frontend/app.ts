const image = document.getElementById("image")
const description = document.getElementById("description")
const title = document.getElementById("title")
const list = document.getElementById("list") as HTMLUListElement
const btn = document.getElementById("btn")

export interface Todo{
    Id:string
    Title:string
    Description:string
    Image:string
}

async function getAllTodos(){
    const res= await fetch('http://localhost:4000/todos')
    const todos = (await res.json() ) as Todo[]
    return todos    
}

async function printDom(){
    const todos = await getAllTodos()
    console.log(todos)
    let html=' '
    todos.forEach(todo=>{
            html +=`
            <li> 
            <article class="post">
                <a href ="#">
                    <img src="${todo.Image}"/>
                </a>
                <div class="post__content">
                    <h3> ${todo.Title}</h3>
                    <p> ${todo.Description}</p>
                </div>
        
            </article>
        </li>

            `
    })
    console.log(html)
   list.innerHTML=html

}


printDom()
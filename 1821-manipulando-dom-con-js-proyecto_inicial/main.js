/*
document.getElementById(‘id’);
document.getElementsByClassName(‘clase’)
document.getElementsByTagName(‘tag’)
document.querySelectorAll(“selector”)

document.querySelector('span').textContent = 'Realizar curso de JavaScript'
*/

const btn = document.querySelector("[data-form-btn]"); //seleccionamos el boton agregar usando sata atribute
const createTask = (evento) => {
    evento.preventDefault(); //no refresh la pag y no quita el input
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card"); //agregamos la clase a el elemento que acabamos de crear para que tome el css
    input.value = '';   //haciendo que limpie el filtro luego de hacer click
    const content = `
    <div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
    </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>
    `
    list.appendChild(task);
    task.innerHTML = content;
    console.log(content);
}
console.log(btn);

//listener de tipo click listener tien 2 parametros accion, lo que hace

btn.addEventListener("click", createTask);

//arrow function - funciones anonimas




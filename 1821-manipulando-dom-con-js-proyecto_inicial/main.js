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
    console.log(input.value);
}
console.log(btn);

//listener de tipo click listener tien 2 parametros accion, lo que hace

btn.addEventListener("click", createTask);

//arrow function - funciones anonimas
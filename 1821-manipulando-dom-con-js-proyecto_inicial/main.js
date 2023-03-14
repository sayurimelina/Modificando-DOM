(() => {

//data attributes "[nombre del data atribute]"
const btn = document.querySelector("[data-form-btn]"); 

//ARROW FUNCTION - funciones anonimas
const createTask = (evento) => {
    evento.preventDefault(); //no actualiza la pag y no quita el input
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");

    //create element importa el orden del inner 
    const task = document.createElement("li");
    task.classList.add("card"); //agregamos la clase a el elemento que acabamos de crear para que tome el css
    input.value = '';   //haciendo que limpie el filtro luego de hacer click
    const taskContent = document.createElement("div");
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerHTML = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    //TEMPLATE STRINGS
    const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>
    `;
    //colocar un elemento hijo a un (padre)
    task.appendChild(taskContent);
    list.appendChild(task);
    //task.innerHTML = content;

}


//listener de tipo click listener tien 2 parametros accion, lo que hace
btn.addEventListener("click", createTask);

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon");    //solucion a muchos caracteres + de 1 clase, es mejore separarlas
    i.addEventListener("click", completeTask);
    return i;
}

//TARGET Y TOGGLE
const completeTask = (event) => {
    const element = event.target; //Encontrar el objetivo del evento utilizando la propiedad  TARGET
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}

//IIFE - Immediately invoked function expression
})();
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

export default checkComplete
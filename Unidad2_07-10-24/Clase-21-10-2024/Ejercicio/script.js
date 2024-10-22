let listaTareas = [];

const inputTarea = document.getElementById('tareaInput');

const botonAgregarTarea = document.getElementById('agregarTarea');

const divTareas = document.getElementById('tareas');

const agregarTarea = () => {
    const tarea = inputTarea.value;
    if (tarea){
        //agrega la tarea
        listaTareas.push(tarea);

        mostrarTareas();

        inputTarea.value = '';
    } else {
        alert('Ingrese una tarea');
    }
};

const mostrarTareas = () => {
    divTareas.innerHTML = '';

    listaTareas.forEach((tarea, index) => {

        const tareaDiv = document.createElement('div');
        tareaDiv.textContent = `${index +1}. ${tarea}`;
        
        //eliminar tarea
        const botonEliminarTarea = document.createElement('button');
        botonEliminarTarea.textContent = 'Eliminar';
        botonEliminarTarea.onclick = () => eliminarTarea(index);

        tareaDiv.appendChild (botonEliminarTarea);

        divTareas.appendChild (tareaDiv);

    });
    //muestra lista en consola

    console.log(listaDeTareas);
};

const eliminarTarea = (index) => {

    listaTareas.splice (index,1);
    mostrarTareas();
};

botonAgregarTarea.addEventListener('click', agregarTarea);


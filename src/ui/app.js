const { remote } = require("electron");
const main = remote.require("./main");
let data;
let clasificaciones = [];
let tareas = [];
const clasificacionesHtml = document.getElementById("clasificaciones");
const tareasHtml = document.getElementById("tareas");
let tareaSeleccionada;
let clasificacionSeleccionada;
let nombreClaseSeleccionada = '';

const getData = async () => {
    data = main.getData();
    clasificaciones = data.clasificaciones;
    tareas = data.tareas;
    clasificacionSeleccionada = data.clasificacionPorDefecto.id;
    tareaSeleccionada = data.tareaPorDefecto.id;
    renderClasificaciones(clasificaciones);
    renderTareas(tareas);
}

function renderClasificaciones(p) {
    clasificacionesHtml.innerHTML = '';
    p.forEach(clasificacion => {
        if (clasificacion.id == clasificacionSeleccionada) {
            nombreClaseSeleccionada = 'seleccionada';
        }
        clasificacionesHtml.innerHTML += `
        <div class="card card-body my-2 ${'clasificacion' + clasificacion.id + ' ' + nombreClaseSeleccionada}" style="background:#dee2e6">
            <p>${clasificacion.descripcion}</p>
        </div>
        `;
        nombreClaseSeleccionada = '';
    });
}


function renderTareas(p) {
    tareasHtml.innerHTML = '';
    p.forEach((tareas, index) => {
        if (tareas.id == tareaSeleccionada) {
            nombreClaseSeleccionada = 'seleccionada';
        }
        if (tareas.clasificacionId == clasificacionSeleccionada) {
            tareasHtml.innerHTML += `
            <div class="card card-body my-2 ${'tarea' + (index + 1) + ' ' + nombreClaseSeleccionada}" style="background:#dee2e6">
                <p>${tareas.descripcion}</p>
            </div>
            `;
        }
        nombreClaseSeleccionada = '';
    });
}


getData();
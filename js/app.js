let formRegistro = document.getElementById('registro-planetas-form');
let listarPlaneta = document.getElementById('listarPlaneta');
let buscar = document.getElementById("btnBuscar");
let busqueda = document.getElementById("busqueda");

let planetas = JSON.parse(localStorage.getItem('Planetas'))  || [];

// capturar datos del formulario de registro
const capturarDatos = () => {
    let nombre = document.getElementById('nombrePlaneta').value;
    let distancia = document.getElementById('distanciaPlaneta').value;
    let tamaño = document.getElementById('tamañoPlaneta').value;

    let registro = {
        nombre, distancia, tamaño
    }

    planetas.push(registro);
    localStorage.setItem('Planetas', JSON.stringify(planetas));
    getLocalStorage();

}

formRegistro.addEventListener('submit', e => {
    e.preventDefault();
    capturarDatos();
    e.target.reset();
})

// obtener array de localStorage e imprimir en tabla
const getLocalStorage = () => {
    listarPlaneta.innerHTML = '';

    let planetasLocalStorage = JSON.parse(localStorage.getItem('Planetas'));
    console.log(planetasLocalStorage);

    planetasLocalStorage?.map(planeta => {
        const { nombre, distancia, tamaño } = planeta;
        listarPlaneta.innerHTML += `
            <tr>
                <th scope="row"></th>
                <td>${nombre}</td>
                <td>${distancia}</td>
                <td>${tamaño}</td>
            </tr>
        `
    })
}

// buscar
buscar.addEventListener('click', e => {
    e.preventDefault();
    let inputBuscar = document.getElementById('inputBuscar').value;
    let data = JSON.parse(localStorage.getItem('Planetas'));
    let filtro = data.filter(planeta => planeta.nombre.toLowerCase() === inputBuscar.toLowerCase());

    busqueda.innerHTML = '';

    filtro.length === 0
    ?
    busqueda.innerHTML += `
        <div class="alert alert-danger d-flex align-items-center" role="alert">
         <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
            <p>
                El planeta <b>${inputBuscar}</b> no se encuentra en la tabla!!!
            </p>
        </div>
    </div>
    `
    :
    filtro.map(planeta => {
        const { nombre, distancia, tamaño } = planeta;
        busqueda.innerHTML += `
            <div class="container-table container-fluid" id="resultados">
                <table class="table">
                    <h4>Resultados</h4>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Distancia (UA)</th>
                            <th scope="col">Tamaño</th>
                        </tr>
                    </thead>
                    <tbody>
                        <th scope="row"></th>
                        <td>${nombre}</td>
                        <td>${distancia}</td>
                        <td>${tamaño}</td>
                    </tbody>
                </table>
            </div>
        `
    })

})

// cargar localStorage
document.addEventListener('DOMContentLoaded', getLocalStorage());






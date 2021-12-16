document.querySelector('#btn_enviar_evaluacion').addEventListener('click', function(){
    guardarDatos();
});

document.querySelector('#btn_ordenar_valores').addEventListener('click', function(){
    ordenarPlanetas();
});

document.querySelector('#btn_buscar_planeta').addEventListener('click', function(){
    buscarPlaneta();
});

 
function guardarDatos(){
    
        // Planeta 1
        let nomPlaneta1 = document.getElementById('np_planeta_1').value;
        let disPlaneta1 = document.getElementById('d_planeta_1').value;
        let tamPlaneta1 = document.getElementById('t_planeta_1').value;
        
        // Planeta 2
        let nomPlaneta2 = document.getElementById('np_planeta_2').value;
        let disPlaneta2 = document.getElementById('d_planeta_2').value;
        let tamPlaneta2 = document.getElementById('t_planeta_2').value;
        
        // Planeta 3
        let nomPlaneta3 = document.getElementById('np_planeta_3').value;
        let disPlaneta3 = document.getElementById('d_planeta_3').value;
        let tamPlaneta3 = document.getElementById('t_planeta_3').value;
        
        // Planeta 4
        let nomPlaneta4 = document.getElementById('np_planeta_4').value;
        let disPlaneta4 = document.getElementById('d_planeta_4').value;
        let tamPlaneta4 = document.getElementById('t_planeta_4').value;
        
        // Planeta 5
        let nomPlaneta5 = document.getElementById('np_planeta_5').value;
        let disPlaneta5 = document.getElementById('d_planeta_5').value;
        let tamPlaneta5 = document.getElementById('t_planeta_5').value;

        let planetas = [
            {
                "nombre": `${nomPlaneta1}`,
                "distancia": parseFloat(`${disPlaneta1}`),
                "tamaño": parseFloat(`${tamPlaneta1}`)
            },
            {
                "nombre": `${nomPlaneta2}`,
                "distancia": parseFloat(`${disPlaneta2}`),
                "tamaño": parseFloat(`${tamPlaneta2}`)
            },
            {
                "nombre": `${nomPlaneta3}`,
                "distancia": parseFloat(`${disPlaneta3}`),
                "tamaño": parseFloat(`${tamPlaneta3}`)
            },
            {
                "nombre": `${nomPlaneta4}`,
                "distancia": parseFloat(`${disPlaneta4}`),
                "tamaño": parseFloat(`${tamPlaneta4}`)
            },
            {
                "nombre": `${nomPlaneta5}`,
                "distancia": parseFloat(`${disPlaneta5}`),
                "tamaño": parseFloat(`${tamPlaneta5}`)
            }
        ];

        console.log(planetas)
        localStorage.setItem('ArrayPlanetas', JSON.stringify(planetas));
        alert("Información guardada")
}

function ordenarPlanetas(){
    
    if(localStorage.getItem('ArrayPlanetas')){

        let listaPlanetas = JSON.parse(localStorage.getItem('ArrayPlanetas'));

        listaPlanetas.sort((a, b) => {
            if (a.distancia < b.distancia){
                return -1;
            } else if (a.distancia > b.distancia){
                return 1;
            }
        });
    
        console.log(listaPlanetas);


    } else {
        console.log('No se encontraron los datos');
    }
}

function buscarPlaneta(){
    
    let listaPlanetas = JSON.parse(localStorage.getItem('ArrayPlanetas'));

    let busqueda = prompt("¿Qué planeta desea buscar?");
    
    const resultado = listaPlanetas.find(elemento => {
        return elemento.nombre == busqueda;

    });
    console.log(resultado);
    
}







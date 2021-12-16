document.querySelector('#btn_enviar_evaluacion').addEventListener('click', function(){
    guardarDatos();
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
                "distancia": `${disPlaneta1}`,
                "tamaño": `${tamPlaneta1}`
            },
            {
                "nombre": `${nomPlaneta2}`,
                "distancia": `${disPlaneta2}`,
                "tamaño": `${tamPlaneta2}`
            },
            {
                "nombre": `${nomPlaneta3}`,
                "distancia": `${disPlaneta3}`,
                "tamaño": `${tamPlaneta3}`
            },
            {
                "nombre": `${nomPlaneta4}`,
                "distancia": `${disPlaneta4}`,
                "tamaño": `${tamPlaneta4}`
            },
            {
                "nombre": `${nomPlaneta5}`,
                "distancia": `${disPlaneta5}`,
                "tamaño": `${tamPlaneta5}`
            }
        ];

        console.log(planetas)
        localStorage.setItem('ArrayPlanetas', JSON.stringify(planetas));
        alert("Información guardada")
}






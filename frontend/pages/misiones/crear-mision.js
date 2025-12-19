const API_URL_MISIONES = "http://localhost:3000/api/misiones"
const API_URL_AGENTES = "http://localhost:3000/api/agentes"
const API_URL_VILLANOS = "http://localhost:3000/api/villanos"

fetch(API_URL_AGENTES).then((response) => {
    return response.json()
}).then((agentes) => {
    const newSelectAgentes = document.getElementById("select-agentes")

    agentes.forEach(agente => {
        const newOptionAgente = document.createElement("option")
        newOptionAgente.innerText = agente.nombre
        newOptionAgente.value = agente.id

        newSelectAgentes.appendChild(newOptionAgente)
    });
})

fetch(API_URL_VILLANOS).then((response) => {
    return response.json()
}).then((villanos) => {
    const newSelectVillanos = document.getElementById("select-villanos")

    villanos.forEach(villano => {
        const newOptionVillano = document.createElement("option")
        newOptionVillano.innerText = villano.nombre
        newOptionVillano.value = villano.id

        newSelectVillanos.appendChild(newOptionVillano)
    });
})

const botonEnviar = document.getElementById("boton-enviar")

botonEnviar.addEventListener("click", crearMision)

function crearMision() {

    const nuevaMision = {
        titulo: document.getElementById("titulo").value,
        descripcion: document.getElementById("descripcion").value,
        estado: document.getElementById("estado").value,
        coste: document.getElementById("coste").value,
        nivel_de_dificultad: document.getElementById("nivel_de_dificultad").value,
        imagen_url: document.getElementById("imagen_url").value,
        id_agente: document.getElementById("select-agentes").value,
        id_villano: document.getElementById("select-villanos").value
    }

    if (!nuevaMision.titulo) {
        alert("Falta el titulo")
        return
    }

    if (!nuevaMision.descripcion) {
        alert("Falta la descripcion")
        return
    }

    if (!nuevaMision.estado) {
        alert("Falta el estado")
        return
    }
    if (!nuevaMision.coste) {
        alert("Falta el coste")
        return
    }
    if (nuevaMision.coste < 0){
        alert("El coste debe ser un entero mayor a cero")
        return
    }
    if (!nuevaMision.nivel_de_dificultad) {
        alert("Falta el nivel de dificultad")
        return
    }
    if (nuevaMision.nivel_de_dificultad < 1 || nuevaMision.nivel_de_dificultad > 10) {
        alert("El nivel de dificultad debe estar entre 1 y 10")
        return
    }
    if (!nuevaMision.id_agente) {
        alert("Falta el agente")
        return
    }
    if (!nuevaMision.id_villano) {
        alert("Falta el villano")
        return
    }

    fetch(API_URL_MISIONES, {
        method:'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(nuevaMision)
    })
    .then(response =>{
        if(!response.ok){
            throw new Error('HTTP ERROR! Status:' + response.status)
        }
        return response.json()
    })
    .then(data =>{
        console.log('Success:' + data);
    })
    .catch(error =>{
        console.log('Error: ' + error)
    })
}

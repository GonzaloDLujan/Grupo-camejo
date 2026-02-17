const API_URL_MISIONES = "http://localhost:3000/api/misiones"
const API_URL_AGENTES = "http://localhost:3000/api/agentes"
const API_URL_VILLANOS = "http://localhost:3000/api/villanos"

const urlParams = new URLSearchParams(window.location.search);
const id_agente = urlParams.get('id');

fetch(API_URL_AGENTES + "/" + id_agente).then((response) =>{
    return response.json()
}).then((agente) =>{
    document.getElementById("nombre").value = agente.nombre
    document.getElementById("especie").value = agente.especie
    document.getElementById("fecha_de_ingreso").value = agente.fecha_de_ingreso
    document.getElementById("estado").value = agente.estado
    document.getElementById("nivel_de_habilidad").value = agente.nivel_de_habilidad
    document.getElementById("imagen_url").value = agente.imagen_url
})

const botonEnviar = document.getElementById("boton-enviar")

botonEnviar.addEventListener("click", editarAgente)

function editarAgente() {

    const agenteEditado = {
        nombre: document.getElementById("nombre").value,
        especie: document.getElementById("especie").value,
        fecha_de_ingreso: document.getElementById("fecha_de_ingreso").value,
        estado: document.getElementById("estado").value,
        nivel_de_habilidad: document.getElementById("nivel_de_habilidad").value,
        imagen_url: document.getElementById("imagen_url").value
    }

    if (!agenteEditado.nombre) {
        alert("Falta el nombre")
        return
    }

    if (!agenteEditado.especie) {
        alert("Falta la especie")
        return
    }

    if (!agenteEditado.fecha_de_ingreso ) {
        alert("Falta la fecha de ingreso")
        return
    }

    if (!agenteEditado.nivel_de_habilidad) {
        alert("Falta el nivel de habilidad")
        return
    }

    if (agenteEditado.nivel_de_habilidad < 1 || agenteEditado.nivel_de_habilidad > 10 ) {
        alert("El nivel de habilidad debe ser entre 1 y 10")
        return
    }

    if (!agenteEditado.estado) {
        alert("Falta el estado")
        return
    }

    if (!agenteEditado.imagen_url) {
        alert("Falta la URL de la imagen")
        return
    }


    fetch(API_URL_AGENTES + "/" + id_agente, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(agenteEditado)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP ERROR! Status:' + response.status)
            }
            return response.json()
        })
        .then(data => {
            console.log('Success:' + data);
            window.location.replace(`agente.html?id=${id_agente}`)
        })
        .catch(error => {
            console.log('Error: ' + error)
        })
}
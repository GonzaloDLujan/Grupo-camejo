const API_URL_AGENTES = "http://localhost:3000/api/agentes"

const botonEnviar = document.getElementById("boton-enviar")

botonEnviar.addEventListener("click", crearAgente)

function crearAgente() {

    const nuevoAgente = {
        nombre: document.getElementById("nombre").value,
        especie: document.getElementById("especie").value,
        fecha_de_ingreso: document.getElementById("fecha").value,
        estado: document.getElementById("estado").value,
        nivel_de_habilidad: document.getElementById("nivel").value,
        imagen_url: document.getElementById("imagen").value
        
    }
    
    if (!nuevoAgente.nombre) {
        alert("Falta el Nombre")
        return
    }

    if (!nuevoAgente.especie) {
        alert("Falta la Especie")
        return
    }

    if (!nuevoAgente.fecha_de_ingreso) {
        alert("Falta la Fecha")
        return
    }

    if (!nuevoAgente.estado) {
        alert("Falta el Estado")
        return
    }

    if (!nuevoAgente.nivel_de_habilidad) {
        alert("Falta el Nivel")
        return
    }

    if (nuevoAgente.nivel_de_habilidad < 1 || nuevoAgente.nivel_de_habilidad > 100) {
        alert("El Nivel debe estar entre 1 y 100")
        return
    }
    fetch(API_URL_AGENTES, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(nuevoAgente)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('HTTP ERROR! Status: ' + response.status)
        }
        return response.json()
    })
    .then(data => {
        console.log('Success:', data)
        window.location.replace("agentes.html")
    })
    .catch(error => {
        console.log('Error:', error)
    })
}

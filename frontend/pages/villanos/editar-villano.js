const API_URL_MISIONES = "http://localhost:3000/api/misiones"
const API_URL_AGENTES = "http://localhost:3000/api/agentes"
const API_URL_VILLANOS = "http://localhost:3000/api/villanos"

const urlParams = new URLSearchParams(window.location.search);
const id_villano = urlParams.get('id');

fetch(API_URL_VILLANOS + "/" + id_villano).then((response) =>{
    return response.json()
}).then((villano) =>{
    document.getElementById("nombre").value = villano.nombre
    document.getElementById("edad").value = villano.edad
    document.getElementById("ocupacion").value = villano.ocupacion
    document.getElementById("ubicacion").value = villano.ubicacion
    document.getElementById("estado").value = villano.estado
    document.getElementById("apodo").value = villano.apodo
})

const botonEnviar = document.getElementById("boton-enviar")

botonEnviar.addEventListener("click", editarVillano)

function editarVillano() {

    const villanoEditado = {
        nombre: document.getElementById("nombre").value,
        edad: document.getElementById("edad").value,
        ocupacion: document.getElementById("ocupacion").value,
        ubicacion: document.getElementById("ubicacion").value,
        estado: document.getElementById("estado").value,
        apodo: document.getElementById("apodo").value,
    }

    if (!villanoEditado.nombre) {
        alert("Falta el nombre")
        return
    }

    if (!villanoEditado.edad) {
        alert("Falta la edad")
        return
    }

    if (villanoEditado.edad < 1) {
        alert("La edad debe ser mayor a 1")
        return
    }

    if (!villanoEditado.ocupacion) {
        alert("Falta el ocupacion")
        return
    }

    if (!villanoEditado.ubicacion) {
        alert("Falta el ubicacion")
        return
    }

    if (!villanoEditado.estado) {
        alert("Falta el estado")
        return
    }

    if (!villanoEditado.apodo) {
        alert("Falta el apodo")
        return
    }

    fetch(API_URL_VILLANOS + "/" + id_villano, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(villanoEditado)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP ERROR! Status:' + response.status)
            }
            return response.json()
        })
        .then(data => {
            console.log('Success:' + data);
            window.location.replace(`villano.html?id=${id_villano}`)
        })
        .catch(error => {
            console.log('Error: ' + error)
        })
}
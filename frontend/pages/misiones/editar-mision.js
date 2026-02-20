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

const urlParams = new URLSearchParams(window.location.search);
const id_mision = urlParams.get('id');

fetch(API_URL_MISIONES + "/" + id_mision).then((response) =>{
    return response.json()
}).then((mision) =>{
    document.getElementById("titulo").value = mision.titulo
    document.getElementById("descripcion").value = mision.descripcion
    document.getElementById("estado").value = mision.estado
    document.getElementById("coste").value = mision.coste
    document.getElementById("nivel_de_dificultad").value = mision.nivel_de_dificultad
    document.getElementById("imagen_url").value = mision.imagen_url
    document.getElementById("select-agentes").value = mision.id_agente
    document.getElementById("select-villanos").value = mision.id_villano
})

const botonEnviar = document.getElementById("boton-enviar")

botonEnviar.addEventListener("click", editarMision)

function editarMision() {

    const misionEditada = {
        titulo: document.getElementById("titulo").value,
        descripcion: document.getElementById("descripcion").value,
        estado: document.getElementById("estado").value,
        coste: document.getElementById("coste").value,
        nivel_de_dificultad: document.getElementById("nivel_de_dificultad").value,
        imagen_url: document.getElementById("imagen_url").value,
        id_agente: document.getElementById("select-agentes").value,
        id_villano: document.getElementById("select-villanos").value
    }

    if (!misionEditada.titulo) {
        alert("Falta el titulo")
        return
    }

    if (!misionEditada.descripcion) {
        alert("Falta la descripcion")
        return
    }

    if (!misionEditada.estado) {
        alert("Falta el estado")
        return
    }
    if (!misionEditada.coste) {
        alert("Falta el coste")
        return
    }
    if (misionEditada.coste < 0) {
        alert("El coste debe ser un entero mayor a cero")
        return
    }
    if (!misionEditada.nivel_de_dificultad) {
        alert("Falta el nivel de dificultad")
        return
    }
    if (misionEditada.nivel_de_dificultad < 1 || editarMision.nivel_de_dificultad > 10) {
        alert("El nivel de dificultad debe estar entre 1 y 10")
        return
    }
    if (!misionEditada.id_agente) {
        alert("Falta el agente")
        return
    }
    if (!misionEditada.id_villano) {
        alert("Falta el villano")
        return
    }

    fetch(API_URL_MISIONES + "/" + id_mision, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(misionEditada)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP ERROR! Status:' + response.status)
            }
            return response.json()
        })
        .then(data => {
            console.log('Success:' + data);
            window.location.replace(`mision.html?id=${id_mision}`)
        })
        .catch(error => {
            console.log('Error: ' + error)
        })
}

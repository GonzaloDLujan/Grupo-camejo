const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const API_URL = "http://localhost:3000/api/agentes/" + id

llenar_pagina()

async function llenar_pagina() {
    try {
        const agente = await fetch(API_URL).then(r => r.json())

        // IMAGEN
        const img = document.getElementById("img-Grande")
        img.src = agente.imagen_url
        img.alt = "FOTO DEL AGENTE " + id

        // NOMBRE
        const pNombre = document.getElementById("nombre")
        pNombre.innerText = agente.nombre

        // INFO
        const datos = document.getElementById("datos-agente")
        datos.innerText =
            agente.nombre + " el " + agente.especie +
            " con estado " + agente.estado +
            ", nivel de habilidad " + agente.nivel_de_habilidad +
            " e ingreso el " + agente.fecha_de_ingreso

        // BOTON EDITAR
        const buttonEditar = document.getElementById("boton-editar")
        buttonEditar.addEventListener("click", () => {
            window.location.href = `editar-agente.html?id=${id}`
        })

    } catch (error) {
        console.log(error)
    }
}

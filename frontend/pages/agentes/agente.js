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
        document.getElementById("nombre").innerText = agente.nombre

        // INFO
        document.getElementById("especie").innerText = agente.especie
        document.getElementById("fecha").innerText = agente.fecha_de_ingreso.split("T")[0]
        document.getElementById("estado").innerText = agente.estado
        document.getElementById("nivel").innerText = agente.nivel_de_habilidad

        // BOTON EDITAR
        const buttonEditar = document.getElementById("boton-editar")
        buttonEditar.addEventListener("click", () => {
            window.location.href = `editar-agente.html?id=${id}`
        })

    } catch (error) {
        console.log(error)
    }
}

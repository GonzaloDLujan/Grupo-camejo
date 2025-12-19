const urlParams = new URLSearchParams(window.location.search);
const id_mision = urlParams.get('id');
const API_URL_MISION = "http://localhost:3000/api/misiones/" + id_mision

llenar_pagina()
async function llenar_pagina() {
    const newContent = document.getElementById("content-mision")
    try {
        const mision = await fetch(API_URL_MISION).then(r => r.json())

        const agente = await fetch(
            `http://localhost:3000/api/agentes/${mision.id_agente}`
        ).then(r => r.json())

        const villano = await fetch(
            `http://localhost:3000/api/villanos/${mision.id_villano}`
        ).then(r => r.json())
        document.title = mision.titulo

        const imgImagenGrande = document.getElementById("Img-Grande")
        imgImagenGrande.src = mision.imagen_url
        imgImagenGrande.alt = 'IMAGEN DE LA MISION ' + id_mision

        //AGENTE
        const imgAgente = document.getElementById("Img-Agente")
        imgAgente.src = agente.imagen_url
        imgAgente.alt = "FOTO DEL AGENTE " + mision.id_agente
        const pAgente = document.getElementById("Nombre-Agente")
        pAgente.innerText = agente.nombre


        //VILLANO
        const imgVillano = document.getElementById("Img-Villano")
        imgVillano.src = villano.imagen_url
        imgVillano.alt = "FOTO DEL AGENTE " + mision.id_villano
        const pVillano = document.getElementById("Nombre-Villano")
        pVillano.innerText = villano.nombre


        //DESCRIPCION DE LA MISION
        const pDescripcion = document.getElementById("Descripcion")
        pDescripcion.innerText = mision.descripcion + ". La Mision tiene " + mision.nivel_de_dificultad + "/10 de dificultad, se encuentra en estado: " + mision.estado + " y costó:" + mision.coste + "USD."


        //REDIRECCIONES
        const cardAgente = document.getElementById("Agente")
        cardAgente.style.cursor = "pointer"
        cardAgente.addEventListener("click", () => {
            window.location.href = `agente.html?id=${mision.id_agente}`
        })
        const cardVillano = document.getElementById("Villano")
        cardVillano.style.cursor = "pointer"
        cardVillano.addEventListener("click", () => {
            window.location.href = `villano.html?id=${mision.id_villano}`
        })
    } catch (error) {
        console.log(error)
    }
}
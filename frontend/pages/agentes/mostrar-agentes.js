const API_URL_AGENTES = "http://localhost:3000/api/agentes/"

llenar_pagina()

async function llenar_pagina() {
    document.getElementById("div-content-agentes").innerHTML = ""

    const newDiv = document.getElementById("div-content-agentes")

    try {
        const response = await fetch(API_URL_AGENTES)
        const agentes = await response.json()

        console.log(agentes)

        agentes.forEach(agente => {

            const newFolder = document.createElement("div")
            newFolder.className = "folder"
            newFolder.style.cursor = "pointer"

            const deleteBtn = document.createElement("button")
            deleteBtn.className = "button is-danger"
            deleteBtn.innerText = "X"

            deleteBtn.addEventListener("click", (e) => {
                e.stopPropagation()
                borrarAgente(agente.id)
            })

            newFolder.appendChild(deleteBtn)

            const newFolderTab = document.createElement("div")
            newFolderTab.className = "folder-tab"

            const newAgentName = document.createElement("p")
            newAgentName.innerText = agente.nombre

            newFolderTab.appendChild(newAgentName)
            newFolder.appendChild(newFolderTab)

            const newFolderBody = document.createElement("div")
            newFolderBody.className = "folder-content"

            const especie = document.createElement("p")
            especie.innerText = "Especie: " + agente.especie

            const fechaIngreso = document.createElement("p")
            fechaIngreso.innerText = "Ingreso: " + agente.fecha_de_ingreso

            const estado = document.createElement("p")
            estado.innerText = "Estado: " + agente.estado

            const nivel = document.createElement("p")
            nivel.innerText = "Nivel de habilidad: " + agente.nivel_de_habilidad

            newFolderBody.appendChild(especie)
            newFolderBody.appendChild(fechaIngreso)
            newFolderBody.appendChild(estado)
            newFolderBody.appendChild(nivel)

            newFolder.appendChild(newFolderBody)

            newDiv.appendChild(newFolder)

            newFolder.addEventListener("click", () => {
                window.location.href = `agente.html?id=${agente.id}`
            })
        })

    } catch (error) {
        console.log(error)
    }
}

async function borrarAgente(id) {
    await fetch(API_URL_AGENTES + id, { method: 'DELETE' })
    llenar_pagina()
}

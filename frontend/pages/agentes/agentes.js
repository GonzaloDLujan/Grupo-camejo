const API_URL_AGENTES = "http://localhost:3000/api/agentes/"

llenar_pagina()

async function llenar_pagina() {
    document.getElementById("div-content-agentes").innerHTML = ""

    const newDiv = document.getElementById("div-content-agentes")

    try {
        fetch(API_URL_AGENTES)
            .then((response) => response.json())
            .then((agentes) => {
                console.log(agentes);

                agentes.forEach(agente => {
                    const newFolder = document.createElement("div")
                    newFolder.className = "folder"

                    // BOTÓN BORRAR
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

                    const img = document.createElement("img")
                    img.src = agente.imagen_url
                    img.alt = "imagen del agente " + agente.id

                    const info = document.createElement("p")
                    info.innerText =
                        "Especie: " + agente.especie +
                        " | Estado: " + agente.estado +
                        " | Nivel: " + agente.nivel_de_habilidad

                    newFolderBody.appendChild(img)
                    newFolderBody.appendChild(info)
                    newFolder.appendChild(newFolderBody)

                    newDiv.appendChild(newFolder)

                    newFolder.style.cursor = "pointer"
                    newFolder.addEventListener("click", () => {
                        window.location.href = `agente.html?id=${agente.id}`
                    })
                })
            })
    } catch (error) {
        console.log(error)
    }
}

async function borrarAgente(id) {
    fetch(API_URL_AGENTES + id, { method: 'DELETE' })
        .then(llenar_pagina)
}

const API_URL_MISION = "http://localhost:3000/api/misiones/"
llenar_pagina()
async function llenar_pagina() {
    document.getElementById("div-content-misiones").innerHTML = ""

    const newDiv = document.getElementById("div-content-misiones")

    try {
        fetch(API_URL_MISION).then((response) => {
            return response.json()
        }).then((misiones) => {
            misiones.forEach(mision => {
                const newFolder = document.createElement("div")
                newFolder.className = "folder"

                // BOTÓN BORRAR
                const deleteBtn = document.createElement("button")
                deleteBtn.className = "button is-danger"
                deleteBtn.innerText = "X"

                // acción
                deleteBtn.addEventListener("click", (e) => {
                    e.stopPropagation() //asi no entra a la mision en si
                    borrarMision(mision.id)
                })

                newFolder.appendChild(deleteBtn)

                const newFolderTab = document.createElement("div")
                newFolderTab.className = "folder-tab"

                const newMissionName = document.createElement("p")
                newMissionName.innerText = mision.titulo

                newFolderTab.appendChild(newMissionName)
                newFolder.appendChild(newFolderTab)

                const newFolderBody = document.createElement("div")
                newFolderBody.className = "folder-content"

                const newFolderBodyImg = document.createElement("img")
                newFolderBodyImg.src = mision.imagen_url
                newFolderBodyImg.alt = "imagen de la mision " + mision.id

                const newFolderBodyDescription = document.createElement("p")
                newFolderBodyDescription.innerText = mision.descripcion


                newFolderBody.appendChild(newFolderBodyImg)
                newFolderBody.appendChild(newFolderBodyDescription)
                newFolder.appendChild(newFolderBody)

                newDiv.appendChild(newFolder)


                newFolder.style.cursor = "pointer"
                newFolder.addEventListener("click", () => {
                    window.location.href = `mision.html?id=${mision.id}`
                })
            });
        })
    } catch (error) {
        console.log(error)
    }

    async function borrarMision(id) {
        fetch(API_URL_MISION + id, { method: 'DELETE' }).then(
            () => window.location.reload())
    }
}
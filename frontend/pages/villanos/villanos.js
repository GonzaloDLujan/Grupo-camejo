const API_URL_VILLANOS = "http://localhost:3000/api/villanos/"


llenar_pagina()


async function llenar_pagina() {
    document.getElementById("div-content-villanos").innerHTML = ""

    const newDiv = document.getElementById("div-content-villanos")
    try {
        fetch(API_URL_VILLANOS).then((response) => {
            return response.json()
        }).then((villanos) => {
            console.log(villanos);
            
            villanos.forEach(villano => {
                const newFolder = document.createElement("div")
                newFolder.className = "folder"

                // BOTÓN BORRAR
                const deleteBtn = document.createElement("button")
                deleteBtn.className = "button is-danger"
                deleteBtn.innerText = "X"

                // acción
                deleteBtn.addEventListener("click", (e) => {
                    e.stopPropagation() //asi no entra al villano en si
                    borrarVillano(villano.id)
                })

                newFolder.appendChild(deleteBtn)

                const newFolderTab = document.createElement("div")
                newFolderTab.className = "folder-tab"

                const newVillainName = document.createElement("p")
                newVillainName.innerText = villano.nombre

                newFolderTab.appendChild(newVillainName)
                newFolder.appendChild(newFolderTab)

                const newFolderBody = document.createElement("div")
                newFolderBody.className = "folder-content"

                const newFolderBodyImg = document.createElement("img")
                newFolderBodyImg.src = villano.imagen_url
                newFolderBodyImg.alt = "imagen de la villano " + villano.id

                const newFolderBodyDescription = document.createElement("p")
                newFolderBodyDescription.innerText = villano.edad


                newFolderBody.appendChild(newFolderBodyImg)
                newFolderBody.appendChild(newFolderBodyDescription)
                newFolder.appendChild(newFolderBody)

                newDiv.appendChild(newFolder)


                newFolder.style.cursor = "pointer"
                newFolder.addEventListener("click", () => {
                    window.location.href = `villano.html?id=${villano.id}`
                })
            });
        })
    } catch (error) {
        console.log(error)
    }


}

async function borrarVillano(id) {
    fetch(API_URL_VILLANOS + id, { method: 'DELETE' }).then(
        llenar_pagina)
}
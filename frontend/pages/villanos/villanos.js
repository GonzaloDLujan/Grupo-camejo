const API_URL_VILLANOS = "http://localhost:3000/api/villanos"
const API_URL_MISION = "http://localhost:3000/api/misiones"
llenar_pagina()

const contenedor = document.getElementById("galeria-villanos");
async function llenar_pagina() {
    fetch(API_URL_VILLANOS).then((response) => {
        return response.json()
    }).then((villanos) => {
        villanos.forEach(villano => {
            const col = document.createElement("div");
            col.className = "column is-narrow has-text-centered";

            col.innerHTML = `
                    <div class="villano-card" onclick="window.location.href='villano.html?id=${villano.id}'">
                        <img src="${villano.imagen_url}" alt="imagen del villano ${villano.id}" class="is-profile-img">
                        <p class="mt-3 is-size-5 has-text-weight-bold is-uppercase">${villano.apodo}</p>
                    </div>
                `;
            const deleteBtn = document.createElement("button")
            deleteBtn.className = "button delete-button"
            deleteBtn.innerText = "X"

            // acción
            deleteBtn.addEventListener("click", (e) => {
                e.stopPropagation() //asi no entra al villano en si
                console.log(villano.id)
                borrarVillano(villano.id)
            })

            contenedor.appendChild(col);
            contenedor.appendChild(deleteBtn)

        });
    }
    )
}

async function borrarVillano(id) {
    const response = await fetch(API_URL_MISION)
    const misiones = await response.json()
    let villano_en_mision = false
    let i = 0
    let misiones_size = Object.keys(misiones).length


    while (!villano_en_mision && i < misiones_size) {
        if (misiones[i].id_villano == id) {
            villano_en_mision = true
        }
        i++
    }

    if (villano_en_mision) {
        alert("No se puede borrar el Villano porque se encuentra en una mision")
    } else {
        fetch(API_URL_VILLANOS + "/" + id, { method: 'DELETE' }).then(
            () => window.location.reload())
    }

}
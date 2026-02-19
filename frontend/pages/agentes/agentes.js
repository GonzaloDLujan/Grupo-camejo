const API_URL_AGENTES = "http://localhost:3000/api/agentes"
const API_URL_MISION = "http://localhost:3000/api/misiones"

llenar_pagina()

const contenedor = document.getElementById("galeria-agentes");
async function llenar_pagina() {
    fetch(API_URL_AGENTES).then((response) => {
        return response.json()
    }).then((agentes) => {
        agentes.forEach(agente => {
            const col = document.createElement("div");
            col.className = "column is-narrow has-text-centered";
            //Si el url no empieza con http se lo agrega
            let img_url = agente.imagen_url;

            if (!img_url.startsWith("http")) {
                img_url = "https://" + img_url;
            }

            col.innerHTML = `
                    <div class="agente-card" onclick="window.location.href='agente.html?id=${agente.id}'">
                        <img src="${img_url}" alt="imagen del agente ${agente.id}" class="is-profile-img">
                        <p class="mt-3 is-size-5 has-text-weight-bold is-uppercase">${agente.nombre}</p>
                    </div>
                `;
            const deleteBtn = document.createElement("button")
            deleteBtn.className = "button delete-button"
            deleteBtn.innerText = "X"

            // acción
            deleteBtn.addEventListener("click", (e) => {
                e.stopPropagation() //asi no entra al Agente en si
                borrarAgente(agente.id)
            })

            contenedor.appendChild(col);
            contenedor.appendChild(deleteBtn)

        });
    }
    )
}

async function borrarAgente(id) {
    const response = await fetch(API_URL_MISION)
    const misiones = await response.json()
    let agente_en_mision = false
    let i = 0
    let misiones_size = Object.keys(misiones).length


    while (!agente_en_mision && i < misiones_size) {
        if (misiones[i].id_agente == id) {
            agente_en_mision = true
        }
        i++
    }

    if (agente_en_mision) {
        alert("No se puede borrar el agente porque se encuentra en una mision")
    } else {
        fetch(API_URL_AGENTES + "/" + id, { method: 'DELETE' }).then(
            () => window.location.reload())
    }

}
const API_URL_VILLANOS = "http://localhost:3000/api/villanos"

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
                        <img src="${img_url}" alt="imagen del villano ${villano.id}" class="is-profile-img">
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
    fetch(API_URL_VILLANOS + "/" + id, { method: 'DELETE' }).then(
        window.location.reload())
}
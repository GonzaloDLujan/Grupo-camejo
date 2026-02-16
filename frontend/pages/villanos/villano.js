const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const API_URL = "http://localhost:3000/api/villanos/" + id

llenar_pagina()
async function llenar_pagina() {
    try {
        const villano = await fetch(API_URL).then(r => r.json())

        //VILLANO
        const img = document.getElementById("img-Grande")
        img.src = villano.imagen_url
        img.alt = "FOTO DEL VILLANO " + id
        const pNombre = document.getElementById("nombre")
        pNombre.innerText = villano.nombre
        const pApodo = document.getElementById("apodo")
        pApodo.innerText = "AKA " + villano.apodo

        const datos = document.getElementById("datos-villano")
        datos.innerText = villano.nombre + " es un " + villano.ocupacion + " de " + villano.edad + " años" +
            " y se encuentra " + villano.estado + " en la ubicacion: " + villano.ubicacion

        //BOTON EDITAR
        const buttonEditar = document.getElementById("boton-editar")
        buttonEditar.addEventListener("click", () => {
            window.location.href = `editar-villano.html?id=${id}`
        })
    } catch (error) {
        console.log(error)
    }
}


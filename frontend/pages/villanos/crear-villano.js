const API_URL_VILLANOS = "http://localhost:3000/api/villanos"


const botonEnviar = document.getElementById("boton-enviar")

botonEnviar.addEventListener("click", crearMision)

function crearMision() {

    const nuevoVillano = {
        nombre: document.getElementById("nombre").value,
        edad: document.getElementById("edad").value,
        ocupacion: document.getElementById("ocupacion").value,
        ubicacion: document.getElementById("ubicacion").value,
        estado: document.getElementById("estado").value,
        apodo: document.getElementById("apodo").value,
        imagen_url: document.getElementById("imagen_url").value
    }
    if (!nuevoVillano.nombre) {
        alert("Falta el Nombre")
        return
    }

    if (!nuevoVillano.edad) {
        alert("Falta la Edad")
        return
    }

    if (nuevoVillano.edad < 1){
        alert("La Edad Debe Ser Mayor a 1")
        return
    }

    if (!nuevoVillano.ocupacion) {
        alert("Falta la Ocupacion")
        return
    }
    if (!nuevoVillano.ubicacion) {
        alert("Falta la Ubicacion")
        return
    }
    if (!nuevoVillano.estado){
        alert("Falta El EstaDO")
        return
    }
    if (!nuevoVillano.apodo) {
        alert("Falta el apodo")
        return
    }


    fetch(API_URL_VILLANOS, {
        method:'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(nuevoVillano)
    })
    .then(response =>{
        if(!response.ok){
            throw new Error('HTTP ERROR! Status:' + response.status)
        }
        return response.json()
    })
    .then(data =>{
        console.log('Success:' + data);
        window.location.replace("villanos.html")
    })
    .catch(error =>{
        console.log('Error: ' + error)
    })
}

function crearNavbar(){
    const navbar = document.getElementById("navbar")
    const nav = document.createElement("nav")
    nav.className = "navbar"
    nav.role = "navigation"
    nav.ariaLabel = "main navigation"

    const divPrincipal = document.createElement("div")
    divPrincipal.id = "navbarBasicExample"
    divPrincipal.className = "navbar-menu is-active"

    const divRedirecciones = document.createElement("div")
    divRedirecciones.className = "navbar-start"

    const aAgentes = document.createElement("a")
    aAgentes.className = "navbar-item"
    aAgentes.href = "/pages/agentes/agentes.html"
    aAgentes.innerText = "AGENTES"

    const aMisiones = document.createElement("a")
    aMisiones.className = "navbar-item"
    aMisiones.href = "/pages/misiones/misiones.html"
    aMisiones.innerText = "MISIONES"

    const aVillanos = document.createElement("a")
    aVillanos.className = "navbar-item"
    aVillanos.href = "/pages/villanos/villanos.html"
    aVillanos.innerText = "VILLANOS"

    divRedirecciones.appendChild(aAgentes)
    divRedirecciones.appendChild(aMisiones)
    divRedirecciones.appendChild(aVillanos)

    const divLogo = document.createElement("div")
    divLogo.className = "navbar-end"
    
    const aLogo = document.createElement("a")
    aLogo.href = "/pages/principal.html"

    const imgLogo = document.createElement("img")
    imgLogo.src = "/images/logo.png"
    imgLogo.alt = "LOGO.png"
    imgLogo.style.maxHeight = "3rem"
    
    aLogo.appendChild(imgLogo)
    divLogo.appendChild(aLogo)

    divPrincipal.appendChild(divRedirecciones)
    divPrincipal.appendChild(divLogo)
    nav.appendChild(divPrincipal)
    navbar.appendChild(nav)
}
crearNavbar()
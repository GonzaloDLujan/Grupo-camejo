function crearFooter() {
    const divFooter = document.getElementById("footer")

    const footer = document.createElement("footer")
    footer.className = "footer"

    const divFooterElementos = document.createElement("div")
    divFooterElementos.className = "content has-text-centered"

    const pFooter = document.createElement("p")
    pFooter.innerText = "O.W.C.A is a registered product by Disney CC 2025"

    const divFooterIconos = document.createElement("div")
    divFooterIconos.className = "footer-icons"

    const aInstagram = document.createElement("a")
    aInstagram.href="https://www.instagram.com/dan.povenmire/"
    aInstagram.target = "_blank"
    aInstagram.rel = "noopener noreferrer"

    const imgInstagram = document.createElement("img")
    imgInstagram.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
    imgInstagram.width = 30

    aInstagram.appendChild(imgInstagram)


    const aX = document.createElement("a")
    aX.href="https://x.com/DanPovenmire"
    aX.target = "_blank"
    aX.rel = "noopener noreferrer"

    const imgX = document.createElement("img")
    imgX.src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/250px-X_logo_2023.svg.png"
    imgX.width = 30

    aX.appendChild(imgX)
    divFooterIconos.appendChild(aInstagram)
    divFooterIconos.appendChild(aX)

    divFooterElementos.appendChild(pFooter)
    divFooterElementos.appendChild(divFooterIconos)

    footer.appendChild(divFooterElementos)
    divFooter.appendChild(footer)    
}
crearFooter()
/*  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        O.W.C.A is a registered product by Disney CC 2025
      </p>
      <div class="footer-icons">
        <a href="https://www.instagram.com/dan.povenmire/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
            width="30px">
        </a>
        <a href="https://x.com/DanPovenmire" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/250px-X_logo_2023.svg.png"
            width="30px">
        </a>
      </div>
    </div>
  </footer>*/
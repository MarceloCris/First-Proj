//Document - representa o doc, doc.elemt - representa uma funcção dentro da parte do doc que é o HTML, if e else- condicionais.

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img(queryselector busca o seletor no documento, no caso usar a mesma tag CSS, pois foi a mesma que usou para modificar)
  const img = document.querySelector("#profile img")

  //substituir a img e se tiver no light mode ja adiocionar com o setAttribute e o SRC(onde se encontra)
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/marcelo-light.png")
  } else {
    img.setAttribute("src", "./assets/marcelo-dark.png")
  }
}

//se tiver sem light mode, manter a img normal

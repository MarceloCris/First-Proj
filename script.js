//Document - representa o doc, doc.elemt - representa uma funcção dentro da parte do doc que é o HTML, if e else- condicionais.

function toggleMode() {
  const html = document.documentElement
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
}

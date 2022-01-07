const menuMobile = document.getElementById('menu-mobile')

function toggleMenu() {
  const nav = document.getElementById('nav')
  nav.classList.toggle('active') 
}

menuMobile.addEventListener('click', toggleMenu)

const canecaAAAP = document.querySelector('.porcelana-aaa-p')
const canecaPO = document.querySelector('.polimero-p')
const camisa = document.querySelector('.poliester-p')

function porcelana() {
  removerBlock()
  canecaAAAP.style.display = 'block'
}

function polimero() {
  removerBlock()
  canecaPO.style.display = 'block'
}

function poliester() {
  removerBlock()
  camisa.style.display = 'block'
}

function removerBlock() {
  canecaAAAP.style.display = 'none'
  canecaPO.style.display = 'none'
  camisa.style.display = 'none'

}
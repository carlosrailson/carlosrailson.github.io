const camisa = document.querySelector('.camisa')
const details = document.querySelector('.details')
const title = document.querySelector('.title')
const tamanhos = document.querySelector('.resultado')
const branca = document.querySelector('.branca')
const preta = document.querySelector('.preta')
const tamanhoP = document.querySelector('.p')
const tamanhoM = document.querySelector('.m')
const tamanhoG = document.querySelector('.g')

function camisaBranca() {
  camisa.src = "./trocarimagens/img/camisabranca.jpg"
  details.innerHTML ='<h2>Especificações e detalhes</h2><p>A camiseta Branca Mockup é feita de lã natural e costurada com linho fino da índia, a estampa é produzida de forma artesanal e colada manualmente.</p>'
  title.innerHTML = 'Camiseta Mockup Branca'
  preta.classList.remove('class-js')
  branca.classList.add('class-js')
  tamanhos.innerHTML = ' '
  removeClass() // <- quando o usuário clicar, remove a classe dos tamanhos, limpando o campo onde aparecem os tamanhos das camisetas, voltando assim ao tamanho padrão.
}

function camisaPreta() {
  camisa.src = "./trocarimagens/img/camisapreta.jpg"
  details.innerHTML ='<h2>Especificações e detalhes</h2> <p> A camiseta Preta Mockup é feita para quem gosta de se divertir. Produzida com ceda preta dos altos montes da capadocia, te proporciona muito conforto.</p>'
  title.innerHTML = 'Camiseta Mockup Preta'
  branca.classList.remove('class-js')
  preta.classList.add('class-js')
  tamanhos.innerHTML = ' '
  removeClass() // <- quando o usuário clicar, remove a classe dos tamanhos, limpando o campo onde aparecem os tamanhos das camisetas, voltando assim ao tamanho padrão.
}

function p() {
  removeClass()
  tamanhos.innerHTML = '<p>Cumprimento: 55cm</p><p>Ombros: 45cm</p><p>Largura: 40cm</p>'
  tamanhoP.classList.add('class-js')  
  
}

function m() {
  removeClass()
  tamanhos.innerHTML = '<p>Cumprimento: 65cm</p><p>Ombros: 55cm</p><p>Largura: 50cm</p>'
  tamanhoM.classList.add('class-js')
}

function g() {
  removeClass()
  tamanhos.innerHTML = '<p>Cumprimento: 75cm</p><p>Ombros: 65cm</p><p>Largura: 60cm</p>'
  tamanhoG.classList.add('class-js')
}

function removeClass () { // função criada para remover as classes do 'tamanho'
  tamanhoP.classList.remove('class-js')
  tamanhoM.classList.remove('class-js')
  tamanhoG.classList.remove('class-js')
}
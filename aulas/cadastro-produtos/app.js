const formulario = document.querySelector('#form-user')
const btnRemover = document.querySelector('#remover')
const containerCards = document.querySelector('#container-cards')

const itensProdutos = []

// Função gerar template card
function criarCard(produto) {
  // Criar elemento card
  const card = document.createElement('div')
  card.classList.add('card')

  // Adicionar imagem ao card
  const img = document.createElement('img')
  img.src = produto.urlImagem
  img.alt = produto.titulo
  card.appendChild(img)

  // Adicionar título ao card
  const titulo = document.createElement('h3')
  titulo.textContent = produto.titulo
  card.appendChild(titulo)

  // Adicionar descrição ao card
  const descricao = document.createElement('p')
  descricao.textContent = produto.desc
  card.appendChild(descricao)
  
  return card
}

// Função renderizar card
function renderizarCard() { 
  containerCards.innerHTML = ''
  
  // Criar cards
  itensProdutos.forEach((item) => {
    const card = criarCard(item)
    containerCards.appendChild(card)
  })
}
// Mandar um item para a lista
formulario.addEventListener('submit', () => {
  event.preventDefault()

  // Pegar valores do formulário
  const titulo = document.querySelector('#nome').value.trim()
  const desc = document.querySelector('#desc').value.trim()
  const urlImagem = document.querySelector('#img').value.trim()

  // Popular array
  const produto = { titulo, desc, urlImagem }
  itensProdutos.push(produto)
  renderizarCard()

  formulario.reset()
})

// Remover item da lista
btnRemover.addEventListener('click', () => {
  itensProdutos.pop()
  renderizarCard()
})


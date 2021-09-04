// Adicionando informações na página

const enviarInfo = () => {
    
    const categoria = document.createElement('h2')
    categoria.textContent = document.getElementById('option').value
    document.querySelector('[class=imagem]').appendChild(categoria)

    const autor = document.createElement('h3')
    autor.textContent = document.getElementById('autor').value
    document.querySelector('[class=imagem]').appendChild(autor)
    
    const titulo = document.createElement('h3')
    titulo.textContent = document.getElementById('titulo').value
    document.querySelector('[class=imagem]').appendChild(titulo)
    
    const link = document.createElement('a')
    link.setAttribute('href', document.getElementById('link').value)
    link.textContent = 'Link da Receita'
    document.querySelector('[class=imagem]').appendChild(link)

    const texto = document.createElement('p')
    texto.textContent = document.getElementById('texto').value
    document.querySelector('[class=imagem]').appendChild(texto)

}

document.querySelector('form').addEventListener('submit', enviarInfo)


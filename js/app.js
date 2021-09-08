// Adicionando informações na página

const enviarInfo = () => {
    
    

    const categoria = document.getElementById('option').value;
    const autor = document.getElementById('autor').value;
    const titulo = document.getElementById('titulo').value;
    const link = (document.getElementById('link').value).replace('watch?v=', 'embed/');

    const texto = document.getElementById('texto').value;

    document.querySelector('[class=imagem]').innerHTML +=
    `<h2>${categoria}</h2>
    <h3>${autor}</h3>
    <h3>${titulo}</h3>
    <iframe width="560" height="315" src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>${texto}</p>
    `
    
        
    // const categoria = document.createElement('h2')
    // categoria.textContent = document.getElementById('option').value
    // document.querySelector('[class=imagem]').appendChild(categoria)

    // const autor = document.createElement('h3')
    // autor.textContent = document.getElementById('autor').value
    // document.querySelector('[class=imagem]').appendChild(autor)
    
    // const titulo = document.createElement('h3')
    // titulo.textContent = document.getElementById('titulo').value
    // document.querySelector('[class=imagem]').appendChild(titulo)
    
    // const link = document.createElement('a')
    // link.setAttribute('href', document.getElementById('link').value)
    // link.textContent = 'Link da Receita'
    // document.querySelector('[class=imagem]').appendChild(link)

    // const texto = document.createElement('p')
    // texto.textContent = document.getElementById('texto').value
    // document.querySelector('[class=imagem]').appendChild(texto)

}

document.querySelector('form').addEventListener('submit', enviarInfo)



// const enviarInfo = () => {
    
//     const categoria = document.createElement('h2')
//     categoria.textContent = document.getElementById('option').value
//     document.getElementById('cards-receitas').appendChild(categoria)

//     const autor = document.createElement('h3')
//     autor.textContent = document.getElementById('autor').value
//     document.getElementById('cards-receitas').appendChild(autor)
    
//     const titulo = document.createElement('h3')
//     titulo.textContent = document.getElementById('titulo').value
//     document.getElementById('cards-receitas').appendChild(titulo)
    
//     const link = document.createElement('a')
//     link.setAttribute('href', document.getElementById('link').value)
//     link.textContent = 'Link da Receita'
//     document.getElementById('cards-receitas').appendChild(link)

//     const texto = document.createElement('p')
//     texto.textContent = document.getElementById('texto').value
//     document.getElementById('cards-receitas').appendChild(texto)

//    /* em vez de selecionar a div pela classe, passou-se a selecionar a div
//    pelo id/ essa alteração foi feita pois a classe pode se repetir ao longo do html, 
//    enquanto o id é único. */
// }

// document.querySelector('[class=submit]').addEventListener('click', enviarInfo)

/* arrow function é anônima e por isso mais difícil de debugar;
    a função regular aparece o nome dela no debugger */

function addCard() {
    const card = document.createElement('div');
    card.classList.add('card');

    //inserindo o input do link
    const iframe = document.createElement('iframe');
    iframe.classList.add('video');
    const inputLink = document.getElementById('link')
    iframe.src = inputLink.value;

    //inserindo a "escolha" da categoria
    const labelCategoria = document.createElement('p');
    labelCategoria.classList.add('card-label');
    labelCategoria.textContent = 'Categoria:';

    const contentCategoria = document.createElement('p');
    contentCategoria.classList.add('card-content');
    const selectCategoria = document.getElementById('categoria');
    contentCategoria.textContent = selectCategoria.options[selectCategoria.selectedIndex].text; //"categorias" é uma lista.

    //inserino o input do autor
    const labelAutor = document.createElement('p');
    labelAutor.classList.add('card-label');
    labelAutor.textContent = 'Autor:';
    
    const contentAutor = document.createElement('p');
    contentAutor.classList.add('card-content');
    const inputAutor = document.getElementById('autor');
    contentAutor.textContent = inputAutor.value;

    // inserindo o input do titulo da receita
    const labelTitulo = document.createElement('p');
    labelTitulo.classList.add('card-label');
    labelTitulo.textContent = 'Titulo:';

    const contentTitulo = document.createElement('p');
    contentTitulo.classList.add('card-content');
    const inputTitulo = document.getElementById('titulo');
    contentTitulo.textContent = inputTitulo.value;

    //inserindo o input que vai receber a receita
    const labelReceita = document.createElement('p');
    labelReceita.classList.add('card-label');
    labelReceita.textContent = 'Receita:';

    const contentReceita = document.createElement('p');
    contentReceita.classList.add('card-content');
    const textareaReceita = document.getElementById('receita');
    contentReceita.textContent = textareaReceita.value;
   
    //transformandoos objetos criados em filhos do objeto card
    card.appendChild(iframe);
    card.appendChild(labelCategoria);
    card.appendChild(contentCategoria);
    card.appendChild(labelAutor);
    card.appendChild(contentAutor);
    card.appendChild(labelTitulo);
    card.appendChild(contentTitulo);
    card.appendChild(labelReceita);
    card.appendChild(contentReceita);

    document.getElementById('cards-receitas').appendChild(card);

    document.getElementById('form-receita').reset() //reset é um método de formulário/ reseta o formulário depois de clicar no sbmit.

    return false;
}

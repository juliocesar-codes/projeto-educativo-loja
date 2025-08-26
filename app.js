'use stratic'

import produtos_atualizados from './produtos_atualizados.json' with {type:'json'}


function criarImagem(produto){
    const fotos = document.getElementById('produtos')
    const img = document.createElement('img')
    img.src = produto.imagem

    const div = document.createElement('div')

    const nome = document.createElement('p')
    nome.textContent = produto.nome

    const descricao = document.createElement('p')
    descricao.textContent = produto.descricao

    const preco = document.createElement('span')
    preco.textContent = produto.preco

    fotos.appendChild(div)
    div.appendChild(nome)
    div.appendChild(img)
    div.appendChild(descricao)
    div.appendChild(preco )


}

produtos_atualizados.forEach(criarImagem)
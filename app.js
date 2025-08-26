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

    const classificacao = document.createElement('p')
    classificacao.textContent = `Classificação ${produto.classificacao}/5`

    const preco = document.createElement('span')
    preco.textContent = `R$ ${produto.preco}`

    const comprar = document.createElement('a')
    comprar.textContent = 'COMPRAR'
    comprar.className = 'comprar-botao'
    comprar.href = '#'

    

    function mostrarAcao(){
        alert(`Você clicou no produto: ${nome.textContent}`)
    }

    comprar.addEventListener('click', function(event){
        mostrarAcao()
    })

    fotos.appendChild(div)
    div.appendChild(nome)
    div.appendChild(img)
    div.appendChild(classificacao)
    div.appendChild(descricao)
    div.appendChild(preco)
    div.appendChild(comprar)
    

}

produtos_atualizados.forEach(criarImagem)
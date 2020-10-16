
const albuns = require ('../models/musicas.json')

//criar um novo array

let albunsSemRepretir = [] 

albuns.forEach(album => {
    
    if(!albunsSemRepretir.find(item => item.id == album.id)) //se não encontrar esse item dentro do array, coloque-o no albumSemRepetir
    albunsSemRepretir.push(albuns) //pega album e joga no albunsSemRepetir
    
});


//Como o album é um objeto dentro das músicas, temos antes que fazer
// um tratamento para poder acessá-lo e retornar um array somento com os albuns para fazer alteração.

//PUT
const atualizarAlbum = (request, response) => {
    const albumAtualizado = request.body //recebendo a atualização pelo corpo 
    const id = parseInt(request.params.id) //recebendo id por parametro

    //criar um novo array somente com os ids do album
    const albumIds = albunsSemRepretir.map(album => album.id) //retornando o id

    //criar uma constante que vai identificar o primeiro item e vai me dizer qual é o indice dentro do array albunsIds
    const atualizaId = albumIds.indexOf(id) //qual é o indice dentro desse array de cada album, pois é a partir dele que vamos achar o elemento que faremos a modificação
    
    const albumAtualizadoComId = {id, ... albumAtualizado} //montando novo album atualizado pegando o id passado por parametro e pegando todos os itens de albumAtualizado
    albunsSemRepretir.splice(atualizaId,1,albumAtualizadoComId) //vai começar a deletar a partir do id, tirando 1 item e colocar no lugar o albumAtualizadoComId

    response.status(200).json(albunsSemRepretir.find(album=> album.id === id))
}

//PATCH

//só manda o item que você deseja atualizar

const updateAlbum = (request, response) => {

    const albumAtualizado = request.body
    const id = parseInt(request.params.id)

    const albumParaAtualizar = albunsSemRepretir.find(album => album.id == id)

    //identificar dentro de albumAtualizado uma chave
    for (key in albumAtualizado) {
        albumParaAtualizar[key] = albumAtualizado[key]

        response.status(200).json(albumParaAtualizar) //mandar exatamente o que foi atualizado
    }
    
}
module.exports = {
    atualizarAlbum,
    updateAlbum
}
const { response } = require('express')
const games = require ('../models/games.json')

// criar um novo array

//PUT

const atualizar = (request, require) =>{
    const gamesAtualizados = request.body
    const id = parseInt(request.params.id)

    const gamesId = games.map(games => games.id)

    const atualizaId = gamesId.indexOf(id)

    const gamesAtualizadosComId = {id, ... gamesAtualizados}
    games.splice(atualizaId,1,gamesAtualizadosComId)

    response.status(200).json(games.find(games => games.id === id))

}

//PATCH

const update = (request, response) => {
    const gamesAtualizacao = request.body
    const id = request.params.id

    const gamesParaAtualizar = games.find(games => games.id == id)

    for (key in games) {
        gamesParaAtualizar[key] = gamesAtualizacao[key]
    }
}

module.exports = {
    atualizar,
    update
}
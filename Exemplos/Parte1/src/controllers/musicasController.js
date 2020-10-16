//LÓGICA

/*const musicas = [
    {id: 1,
    nome: "musica1"},
    {id:2,
    nome: "musica2"},
    {id:3,
    nome: "musica3"}]



const musicasIDs = musicas.map(musica =>{
    return musica.id
})


const atualizaId = musicasIDs.indexOf(2)

musicas.splice(atualizaId, 1, {id:2, nome: "musica alterada"})
console.log(musicas)*/

const { response } = require("express")
const musicas = require("../models/musicas.json")

//PUT

const atualizar = (request, response) => {

    const musicaAtualizada = request.body
    const id = parseInt(request.params.id)

    const musicaIds = musicas.map(musica => musica.id)

    const atualizaId = musicaIds.indexOf(id)

    const musicaAtualizadaComId = {id, ...musicaAtualizada}
    musicas.splice(atualizaId, 1, musicaAtualizadaComId)

    response.status(200).send(musicas.find(musica=> musica.id === id))
    console.log(musicas)
}


//PATCH
const update = (request, response) => {
    const musicaAtualizacao = request.body
    const id = parseInt(request.params.id)

    const musicaParaAtualizar = musicas.find(musica => musica.id == id)

    /*Object.keys(musicaAtualizacao).forEach((key)=>{
        musicaParaAtualizar[key] = musicaAtualizacao[key]
    })
    response.status(200).send(musicas)*/

    for (key in musicaParaAtualizar) {
        musicaParaAtualizar[key] = musicaAtualizacao[key]
    }
}
    
module.exports = {
    atualizar,
    update,
}
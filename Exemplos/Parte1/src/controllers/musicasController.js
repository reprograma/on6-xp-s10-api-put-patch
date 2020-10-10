const musicas = require('../models/musicas.json')


const atualizar = (request, response)=>{
    const musicaAtualizada = request.body
    const id = parseInt(request.params.id)

    const musicaIds = musicas.map(musica => musica.id)
    
    const atualizaId = musicaIds.indexOf(id)

    const musicaAtualizadacomId = {id, ...musicaAtualizada}
    musicas.splice(atualizaId, 1, musicaAtualizadacomId)

    response.status(200).send(musicas.find(musica => musica.id === id))
    console.log(musicas)
     

}


const update = (request, response) =>{
    const musicaAtualizacao = request.body
    const id = parseInt(request.params.id)
    const musicaParaAtualizar = musicas.find(musica=>musica.id == id)

    Object.keys(musicaAtualizacao).forEach((key)=>{
        musicaParaAtualizar[key] = musicaAtualizacao[key]
    })

    response.status(200).send(musicas)
}

module.exports = {
    atualizar,
    update
}




















// const musicas = [
//     {id: 1,
//     nome: "musica1"},
//     {id:2,
//     nome: "musica2"},
//     {id:3,
//     nome: "musica3"}]

// //percorrer a array
// //descobrir o index

// const musicasIDs = musicas.map(musica =>{
//     return musica.id
// })
//  console.log(musicasIDs)

// const atualizaId = musicasIDs.indexOf(2)

// musicas.splice(atualizaId, 1, {id:2, nome: "musica alterada"})
// console.log(musicas)


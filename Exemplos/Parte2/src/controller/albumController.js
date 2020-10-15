const musicas = require('../model/musicas.json')

const albuns = musicas.map(musica=>musica.album)

let albunsSemRepetir = []

albuns.forEach(album =>{
    if(!albunsSemRepetir.find(item => item.id===album.id)){
        albunsSemRepetir.push(album)
    }
})

//PUT
const atualizaAlbum = (request, response)=>{
    const albumAtualizado = request.body
    const id = parseInt(request.params.id)

    const albumIds = albunsSemRepetir.map(album => album.id)

    const atualizaId = albumIds.indexOf(id)

    const albumAtualizadoComId = {id, ...albumAtualizado} //es6
    albunsSemRepetir.splice(atualizaId, 1, albumAtualizadoComId)

    response.status(200).send(albunsSemRepetir.find(album=>album.id ===id))
    console.log(albunsSemRepetir)

}


//PATCH
const updateAlbum = (request, response)=>{
    const albumAtualizado = request.body
    const id = parseInt(request.params.id)

    const albumParaAtualizar = albunsSemRepetir.find(album => album.id == id)

    for(chave in albumAtualizado){
        albumParaAtualizar[chave] = albumAtualizado[chave]
    }

    response.status(200).send(albumParaAtualizar)

}

module.exports ={
    atualizaAlbum,
    updateAlbum
}
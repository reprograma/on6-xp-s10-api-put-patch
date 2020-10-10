const app = require('./src/app')

const PORT = 5555

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta: ${PORT}`)
})


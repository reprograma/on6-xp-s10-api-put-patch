const app = require('./src/app')
const PORT = 33

app.listen(PORT, ()=>{
    console.log("servidor tá rodando na porta: " + PORT)
})
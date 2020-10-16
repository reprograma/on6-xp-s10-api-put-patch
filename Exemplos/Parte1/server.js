const app = require('./src/app')

const PORT = 5555

app.listen(PORT, () => {
    console.log(`o servidor esta rodando na http://localhost:${PORT}`)
} )
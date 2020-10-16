const { request, response } = require('express');
const app = require ('./src/app')

const PORT = 1

app.listen(PORT, () => {
    console.log(`O servidor esta rodando da porta ${PORT}`);
})


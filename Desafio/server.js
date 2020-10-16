const express = require ('express')
const app = require ('./src/app')

const PORT = 2

app.listen(PORT, () => {
    console.log(`O servidor esta rodando da porta ${PORT}`);
})

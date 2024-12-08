const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send('Teste de funcionamento da API! Tudo Ok!');
});

app.listen(process.env.PORT, () => {
    console.log(`App está funcionando na porta ${process.env.PORT}!`);
});
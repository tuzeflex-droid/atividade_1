const express = require('express');
const equipamentosRoutes = require('./routes/equipamentos.routes');

const app = express();

app.use(express.json());

app.use(equipamentosRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
    });
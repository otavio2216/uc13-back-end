import express from 'express';
import carros2024 from './tabelacarros';

const app = express();

app.use(express.json());

app.get('/', (requisicao, resposta) => {
    resposta.status(200).send(carros2024);
});

app.listen(3000, () => console.log("servidor rodando com sucesso"));

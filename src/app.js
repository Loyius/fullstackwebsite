import cors from "cors";
import express from "express";
import routes from "./routes/destination.js";

const app = express();

// Middleware para habilitar CORS ( com isso permite requisições de outras origens)
app.use(cors());

// Middleware para interpretar requisições com JSON no body
app.use(express.json());

// Middleware para logar todas as requisições 
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
});

// Utilizar as rotas definidas diretamente sem o prefixo "/api"
app.use(routes); // Agora as rotas podem ser acessadas diretamente, como "/user"

// Middleware para tratar rotas não encontradas (404)
app.use((req, res) => {
    res.status(404).json({ mensagem: "Rota não encontrada" });
});

// Middleware para tratar erros gerais
app.use((err, req, res, next) => {
    console.error(err.stack); // Log do erro no console
    res.status(500).json({ mensagem: "Ocorreu um erro interno no servidor" });
});

export default app;

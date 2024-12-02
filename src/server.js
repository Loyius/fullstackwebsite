import dotenv from "dotenv"; // Carregar variáveis do .env
import app from "./app.js"; // Importa o app configurado
import sequelize from "./config/database.js"; // Conexão com o banco de dados

dotenv.config(); // Carrega as variáveis do .env

const PORT = process.env.PORT || 3000; // Porta padrão ou variável de ambiente

// Função assíncrona para inicialização do servidor
const startServer = async () => {
    try {
        // Tenta autenticar a conexão com o banco de dados
        await sequelize.authenticate();
        console.log("Conexão com o banco de dados estabelecida com sucesso!");

        // Inicia o servidor
        app.listen(PORT, () => {
            console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Erro ao iniciar o servidor:", error.message);
        process.exit(1); // Encerra o processo com erro
    }
};

// Inicia o servidor
startServer();

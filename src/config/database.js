import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Desestruturação das variáveis de ambiente
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

// Criação da instância do Sequelize
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT || 3306, // Define a porta padrão se não estiver definida no .env
    dialect: "mysql", // Definição do banco de dados (MySQL)
    logging: console.log, // Ativa logs para depuração
});

// Função para verificar a conexão e inicializar o banco de dados
const initializeDatabase = async () => {
    try {
        console.log("Verificando conexão com o banco de dados...");
        // Verifica a conexão com o banco
        await sequelize.authenticate();
        console.log("Conexão com o banco de dados estabelecida com sucesso!");

        // Sincroniza os modelos com o banco de dados
        console.log("Sincronizando modelos com o banco de dados...");
        await sequelize.sync({ alter: true }); // 'alter: true' ajusta o esquema existente
        console.log("Modelos sincronizados com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar ou inicializar o banco de dados:", error);
        process.exit(1); // Encerra o processo em caso de falha crítica
    }
};

// Inicializa a conexão com o banco
initializeDatabase()
    .then(() => {
        console.log("Banco de dados inicializado com sucesso!");
    })
    .catch((error) => {
        console.error("Erro durante a inicialização do banco:", error);
    });

// Exporta a instância do Sequelize para uso nos modelos
export default sequelize;

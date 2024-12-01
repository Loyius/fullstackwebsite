import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

// Configurar a conexão com o banco de dados
const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "1901",
    database: process.env.DB_NAME || "bd_vaitur",
});

/**
 * Executa uma consulta SQL com ou sem valores.
 * @param {string} sql - A instrução SQL a ser executada.
 * @param {Array|string} [valores=[]] - Valores a serem passados para a consulta SQL.
 * @param {string} mensagemReject - Mensagem a ser exibida em caso de erro.
 * @returns {Promise} - Retorna uma Promise resolvendo os resultados da consulta.
 */
export const consulta = async (sql, valores = [], mensagemReject = "Erro na consulta") => {
    try {
        const [rows] = await pool.query(sql, valores);
        return rows; // Retorna os resultados da consulta
    } catch (erro) {
        console.error(mensagemReject, erro.message);
        throw new Error(mensagemReject);
    }
};

export default pool;

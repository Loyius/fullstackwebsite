import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000"; // Configuração dinâmica da URL

// Busca todos os usuários
export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/user`);
        return response.data; // Retorna os usuários
    } catch (error) {
        handleAxiosError(error, "Erro ao buscar usuários");
    }
};

// Busca um usuário por ID
export const fetchUserById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/user/${id}`);
        return response.data; // Retorna o usuário específico
    } catch (error) {
        handleAxiosError(error, "Erro ao buscar usuário por ID");
    }
};

// Cria um novo usuário
export const createUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/user`, userData);
        return response.data; // Retorna os dados do usuário criado
    } catch (error) {
        handleAxiosError(error, "Erro ao criar usuário");
    }
};

// Atualiza um usuário
export const updateUser = async (id, userData) => {
    try {
        const response = await axios.put(`${API_URL}/user/${id}`, userData);
        return response.data; // Retorna os dados atualizados
    } catch (error) {
        handleAxiosError(error, "Erro ao atualizar usuário");
    }
};

// Deleta um usuário
export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/user/${id}`);
        return response.data; // Retorna a confirmação de exclusão
    } catch (error) {
        handleAxiosError(error, "Erro ao deletar usuário");
    }
};

// Função genérica para lidar com erros
const handleAxiosError = (error, defaultMessage) => {
    if (error.response) {
        console.error(`${defaultMessage}:`, error.response.data);
        throw new Error(error.response.data.message || defaultMessage);
    } else if (error.request) {
        console.error("Erro de conexão com o servidor.");
        throw new Error("Erro de conexão com o servidor.");
    } else {
        console.error("Erro na configuração da requisição:", error.message);
        throw new Error(defaultMessage);
    }
};

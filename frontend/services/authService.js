import axios from "axios";

const API_URL = "http://localhost:3000/api/auth"; // Endpoint base do backend para autenticação

// Função para login
export const login = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, formData);
        return response.data; // Retorna os dados do usuário e o token
    } catch (error) {
        console.error("Erro no login:", error.response?.data?.message || error.message);
        throw error;
    }
};

// Função para logout (caso precise implementar no futuro)
export const logout = () => {
    localStorage.removeItem("authToken"); // Remove o token do localStorage
};

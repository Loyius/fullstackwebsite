import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService.js";
import banner from "../assets/images/login-banner.jpg";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    // Atualiza os valores do formulário
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Envia o formulário para autenticação
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Usando o serviço de autenticação
            const { token, user } = await login(formData);

            // Armazena o token no localStorage
            localStorage.setItem("authToken", token);

            alert(`Bem-vindo, ${user.nome}!`);
            navigate("/dashboard"); // Redireciona para o dashboard
        } catch (error) {
            alert("Erro no login. Verifique suas credenciais.");
        }
    };

    return (
        <div className="bg-sky-100 flex justify-center items-center h-screen">
            {/* Esquerda: Imagem */}
            <div className="hidden lg:block w-1/2 h-full">
                <img
                    src={banner}
                    alt="Imagem de fundo"
                    className="object-cover w-full h-full"
                />
            </div>
            {/* Direita: Formulário de Login */}
            <div className="p-8 lg:p-36 w-full lg:w-1/2">
                <h1 className="text-3xl font-bold mb-6 text-[#003049]">Entrar</h1>
                <form onSubmit={handleSubmit}>
                    {/* Campo de Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-[#003049] font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            autoComplete="off"
                        />
                    </div>
                    {/* Campo de Senha */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 font-medium">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            autoComplete="off"
                        />
                    </div>
                    {/* Checkbox: Lembrar de Mim */}
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="remember"
                            name="remember"
                            className="w-4 h-4 text-[#003049] focus:ring-[#003049] rounded"
                        />
                        <label htmlFor="remember" className="ml-2 text-gray-700">
                            Lembrar de Mim
                        </label>
                    </div>
                    {/* Link para Recuperar Senha */}
                    <div className="text-right mb-6">
                        <a href="#" className="text-blue-500 hover:underline">
                            Esqueceu a Senha?
                        </a>
                    </div>
                    {/* Botão de Login */}
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-2 px-4 w-full transition duration-300"
                    >
                        Entrar
                    </button>
                </form>
                {/* Link para Criar Conta */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Não tem uma conta?{" "}
                        <a href="/registro" className="text-blue-500 hover:underline">
                            Cadastre-se Aqui
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

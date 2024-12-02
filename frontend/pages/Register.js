import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/userService.js"; // Importando o método do serviço
import banner from "../assets/images/signup-banner.jpg";

const Register = () => {
    const [formData, setFormData] = useState({
        nome: "",
        sobrenome: "",
        cpf: "",
        idade: "",
        genero: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    // Atualiza os valores do formulário
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validação de senha no frontend
        if (formData.password !== formData.confirmPassword) {
            alert("As senhas não coincidem.");
            return;
        }

        try {
            // Usando o serviço para criar o usuário
            const response = await createUser({
                nome: formData.nome,
                sobrenome: formData.sobrenome,
                cpf: formData.cpf,
                idade: formData.idade,
                genero: formData.genero,
                email: formData.email,
                password: formData.password,
            });

            alert("Conta criada com sucesso!");
            navigate("/login");
        } catch (error) {
            if (error.response) {
                console.error("Erro retornado pelo servidor:", error.response.data);
                alert(`Erro: ${error.response.data.message || "Erro desconhecido no servidor."}`);
            } else {
                console.error("Erro na requisição:", error);
                alert("Erro ao conectar com o servidor. Tente novamente.");
            }
        }
    };

    // Redireciona para a página de login
    const handleLoginRedirect = () => {
        navigate("/login");
    };

    return (
        <section className="bg-white dark:bg-[#003049]">
            <div className="flex justify-center min-h-screen">
                <div
                    className="hidden lg:block lg:w-2/5 bg-cover"
                    style={{
                        backgroundImage: `url(${banner})`,
                    }}
                ></div>
                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-full">
                        <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                            Crie sua conta
                        </h1>
                        <form
                            className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label
                                    htmlFor="nome"
                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                >
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    name="nome"
                                    id="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    placeholder="Nome"
                                    className="w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="sobrenome"
                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                >
                                    Sobrenome
                                </label>
                                <input
                                    type="text"
                                    name="sobrenome"
                                    id="sobrenome"
                                    value={formData.sobrenome}
                                    onChange={handleChange}
                                    placeholder="Sobrenome"
                                    className="w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="cpf"
                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                >
                                    CPF
                                </label>
                                <input
                                    type="text"
                                    name="cpf"
                                    id="cpf"
                                    value={formData.cpf}
                                    onChange={handleChange}
                                    placeholder="XXX.XXX.XXX-XX"
                                    className="w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="idade"
                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                >
                                    Idade
                                </label>
                                <input
                                    type="number"
                                    name="idade"
                                    id="idade"
                                    value={formData.idade}
                                    onChange={handleChange}
                                    placeholder="Idade"
                                    className="w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="genero"
                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                >
                                    Gênero
                                </label>
                                <select
                                    name="genero"
                                    id="genero"
                                    value={formData.genero}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                >
                                    <option value="">Selecione o Gênero</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="feminino">Feminino</option>
                                    <option value="outro">Outro</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="seuemail@exemplo.com"
                                    className="w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                >
                                    Senha
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Digite sua senha"
                                    className="w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                >
                                    Confirmar Senha
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirme sua senha"
                                    className="w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                            >
                                Cadastrar
                            </button>
                        </form>

                        <button
                            onClick={handleLoginRedirect}
                            className="w-[320px] mt-4 text-sm text-center text-blue-500 hover:underline"
                        >
                            Já tem uma conta? Faça login
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;

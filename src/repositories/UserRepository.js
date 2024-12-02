import User from "../models/User.js";

//CRUD
class UserRepository {
    // Lista todos os usuários
    async findAll() {
        try {
            const users = await User.findAll(); // Retorna todos os registros da tabela `users`
            return users;
        } catch (error) {
            console.error("Erro ao listar usuários:", error);
            throw error;
        }
    }

    // Busca um usuário pelo ID
    async findById(id) {
        try {
            const user = await User.findByPk(id); // Busca um registro pela chave primária (ID)
            return user;
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            throw error;
        }
    }

    // Cria um novo usuário
    async create(userData) {
        try {
            const user = await User.create(userData); // Cria um novo registro na tabela `users`
            return user;
        } catch (error) {
            console.error("Erro ao criar usuário:", error);
            throw error;
        }
    }

    // Atualiza um usuário
    async update(userData, id) {
        try {
            const user = await User.findByPk(id); // Verifica se o usuário existe
            if (!user) {
                throw new Error("Usuário não encontrado");
            }

            await user.update(userData); // Atualiza o usuário com os dados recebidos
            return user;
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            throw error;
        }
    }

    // Deleta um usuário
    async delete(id) {
        try {
            const user = await User.findByPk(id); // Verifica se o usuário existe
            if (!user) {
                throw new Error("Usuário não encontrado");
            }

            await user.destroy(); // Exclui o registro
            return { message: "Usuário deletado com sucesso" };
        } catch (error) {
            console.error("Erro ao deletar usuário:", error);
            throw error;
        }
    }
}

export default new UserRepository();

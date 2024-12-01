import UserRepository from "../repositories/UserRepository.js";

class UserController {
    // Lista todos os usuários
    async index(req, res) {
        try {
            const rows = await UserRepository.findAll();
            res.status(200).json(rows);
        } catch (error) {
            res.status(500).json({ error: "Erro ao listar usuários." });
        }
    }

    // Mostra detalhes de um usuário pelo ID
    async show(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ error: "ID do usuário é obrigatório." });
            }
            const row = await UserRepository.findById(id);
            if (!row) {
                return res.status(404).json({ error: "Usuário não encontrado." });
            }
            res.status(200).json(row);
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar usuário." });
        }
    }

    // Cria um novo usuário
    async store(req, res) {
        try {
            const { nome, sobrenome, cpf, idade, genero, email, password } = req.body;

            // Validações simples
            if (!nome || !sobrenome || !cpf || !idade || !genero || !email || !password) {
                return res.status(400).json({ error: "Todos os campos são obrigatórios." });
            }

            const row = await UserRepository.create(req.body);
            res.status(201).json({ message: "Usuário criado com sucesso.", user: row });
        } catch (error) {
            res.status(500).json({ error: "Erro ao criar usuário." });
        }
    }

    // Atualiza um usuário existente
    async update(req, res) {
        try {
            const { id } = req.params;
            const { nome, sobrenome, cpf, idade, genero, email, password } = req.body;

            if (!id) {
                return res.status(400).json({ error: "ID do usuário é obrigatório." });
            }

            // Validações simples
            if (!nome || !sobrenome || !cpf || !idade || !genero || !email || !password) {
                return res.status(400).json({ error: "Todos os campos são obrigatórios." });
            }

            const existingUser = await UserRepository.findById(id);
            if (!existingUser) {
                return res.status(404).json({ error: "Usuário não encontrado." });
            }

            const row = await UserRepository.update(req.body, id);
            res.status(200).json({ message: "Usuário atualizado com sucesso.", user: row });
        } catch (error) {
            res.status(500).json({ error: "Erro ao atualizar usuário." });
        }
    }

    // Deleta um usuário pelo ID
    async delete(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ error: "ID do usuário é obrigatório." });
            }

            const existingUser = await UserRepository.findById(id);
            if (!existingUser) {
                return res.status(404).json({ error: "Usuário não encontrado." });
            }

            await UserRepository.delete(id);
            res.status(200).json({ message: "Usuário deletado com sucesso." });
        } catch (error) {
            res.status(500).json({ error: "Erro ao deletar usuário." });
        }
    }
}

// Padrão Singleton
export default new UserController();

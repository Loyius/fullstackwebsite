import UserRepository from "../repositories/UserRepository.js";

class UserControllers {
    async index(req, res) {
        try {
            const rows = await UserRepository.findAll();
            res.status(200).json(rows);
        } catch (error) {
            res.status(500).json({ error: "Erro ao listar usuários." });
        }
    }

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

    async store(req, res) {
        console.log("Dados recebidos no backend:", req.body); // Debug

        try {
            const { nome, sobrenome, cpf, idade, genero, email, password } = req.body;

            if (!nome || !email || !password) {
                return res.status(400).json({ error: "Campos obrigatórios faltando." });
            }

            const newUser = await UserRepository.create(req.body);
            res.status(201).json({ message: "Usuário criado com sucesso!", user: newUser });
        } catch (error) {
            console.error("Erro ao criar usuário:", error);
            res.status(500).json({ error: "Erro ao criar usuário." });
        }
    }


    async update(req, res) {
        try {
            const { id } = req.params;
            const { nome, sobrenome, cpf, idade, genero, email, password } = req.body;

            if (!id) {
                return res.status(400).json({ error: "ID do usuário é obrigatório." });
            }
            if (!nome || !email || !password) {
                return res.status(400).json({ error: "Os campos nome, email e senha são obrigatórios." });
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

export default new UserControllers();

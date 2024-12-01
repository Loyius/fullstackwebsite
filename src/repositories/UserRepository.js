import pool from "../config/database.js";

//CRUD
class UserRepository {
    // Lista todos os usuários
    async findAll() {
        const [rows] = await pool.query("SELECT * FROM users");
        return rows;
    }

    // Busca um usuário pelo ID
    async findById(id) {
        const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
        return rows[0]; // Retorna apenas o primeiro resultado
    }

    // Cria um novo usuário
    async create(user) {
        const { name, email, password } = user;
        const [result] = await pool.query(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, password]
        );
        return { id: result.insertId, name, email };
    }

    // Atualiza um usuário
    async update(user, id) {
        const { name, email, password } = user;
        await pool.query(
            "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?",
            [name, email, password, id]
        );
        return { id, name, email };
    }

    // Deleta um usuário
    async delete(id) {
        await pool.query("DELETE FROM users WHERE id = ?", [id]);
        return { message: "Usuário deletado com sucesso" };
    }
}

export default new UserRepository();

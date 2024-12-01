import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"; // Importação ajustada para ES Modules

const User = sequelize.define(
    "User",
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "O campo nome não pode estar vazio." },
            },
        },
        sobrenome: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: { msg: "O campo sobrenome não pode estar vazio." },
            },
        },
        cpf: {
            type: DataTypes.STRING,
            unique: true, // Garante que o CPF seja único
            allowNull: true,
            validate: {
                notEmpty: { msg: "O CPF é obrigatório." },
                len: { args: [11, 14], msg: "O CPF deve ter entre 11 e 14 caracteres." },
            },
        },
        idade: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isInt: { msg: "A idade deve ser um número inteiro." },
                min: { args: [0], msg: "A idade não pode ser negativa." },
            },
        },
        genero: {
            type: DataTypes.ENUM("male", "female", "other", "non-binary", "prefer_not_to_say"),
            allowNull: true,
            validate: {
                isIn: {
                    args: [["male", "female", "other", "non-binary", "prefer_not_to_say"]],
                    msg: "O gênero deve ser 'male', 'female', 'other', 'non-binary' ou 'prefer_not_to_say'.",
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: { msg: "O email deve ser válido." },
                notEmpty: { msg: "O email é obrigatório." },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "A senha não pode estar vazia." },
                len: { args: [6, 100], msg: "A senha deve ter pelo menos 6 caracteres." },
            },
        },
    },
    {
        timestamps: true,
        tableName: "users",
        paranoid: true, // Ativa exclusão lógica
    }
);

export default User;

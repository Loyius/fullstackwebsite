import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

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
        },
        cpf: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true,
            validate: {
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
            type: DataTypes.ENUM("masculino", "feminino", "outro"),
            allowNull: true,
            validate: {
                isIn: {
                    args: [["masculino", "feminino", "outro"]],
                    msg: "O gênero deve ser 'masculino', 'feminino' ou 'outro'.",
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
        tableName: "users",
        defaultScope: {
            attributes: { exclude: ["password"] },
        },
        scopes: {
            withPassword: { attributes: {} },
        },
    }
);

export default User;

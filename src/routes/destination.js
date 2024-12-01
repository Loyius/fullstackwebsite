import { Router } from "express";
import UserController from "../controllers/UserControllers.js";

const router = Router();

// ROTAS
// Rota para listar todos os usuários
router.get("/user", UserController.index);

// Rota para obter um usuário específico por ID
router.get("/user/:id", UserController.show);

// Rota para criar um novo usuário
router.post("/user", UserController.store);

// Rota para atualizar um usuário existente
router.put("/user/:id", UserController.update);

// Rota para deletar um usuário pelo ID
router.delete("/user/:id", UserController.delete);

export default router;

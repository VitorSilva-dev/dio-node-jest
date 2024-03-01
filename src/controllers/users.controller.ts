import { Request, Response } from "express";
import { database } from "../database";

export class UsersController {
  criarUsuario(req: Request, res: Response): Response {
    const { name } = req.body;

    if (name.length < 1) {
      return res.status(403).json({
        Mensagem: "Não é possível criar usuários sem o nome.",
      });
    }

    database.push(name);

    return res
      .status(201)
      .json({ Mensagem: `Usuário ${name} criado com sucesso!` });
  }

  listarUsuario(req: Request, res: Response): Response {
    return res.status(200).json(database);
  }
}

import { Request } from "express";
import { UsersController } from "./users.controller";
import { makeMockResponse } from "../mocks/mockResponse";

describe("Users controller", () => {
  const usersController = new UsersController();

  const mockRequest = {} as Request;
  const mockResponse = makeMockResponse();
  it("Deve listar os nossos usuários", () => {
    usersController.listarUsuario(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toHaveLength(2);
  });

  it("Deve criar um novo usuário", () => {
    mockRequest.body = {
      name: "Novo usuário",
    };

    usersController.criarUsuario(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      Mensagem: "Usuário Novo usuário criado com sucesso!",
    });
  });

  it("Não deve criar um usuário com nome em branco", () => {
    mockRequest.body = {
      name: "",
    };

    usersController.criarUsuario(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(403);
    expect(mockResponse.state.json).toMatchObject({
      Mensagem: "Não é possível criar usuários sem o nome.",
    });
  });
});

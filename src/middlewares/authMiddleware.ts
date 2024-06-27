import { NextFunction, Request, Response } from "express";
import { BadRequestError, UnauthorizedError } from "../helpers/api-errors";
import jwt from 'jsonwebtoken'
import { usersRepository } from "../repositories/usersRepository";

type JwtPayload = {
    id: number
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers //define que precisará de autenticação

        if (!authorization) {
            throw new UnauthorizedError('Não autorizado') //se n tiver autenticação retorna um erro
        }
        
        const token = authorization.split(' ')[1] //extrai o token do cabeçalho
        
        const { id } = jwt.verify( token, process.env.JWT_PASS ?? '') as JwtPayload //verifica o token e extrai o id

        const user = await usersRepository.findOneBy({ id }) //com o id extraído, ele procura o user dentro do banco de dados

        if (!user) {
            throw new BadRequestError('Email ou senha inválidos') //se o user n for encontrado lança um erro
        }

        const { senha: _, ...loggedUser} = user

        req.user = loggedUser

        next()
}
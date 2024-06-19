import { Request, Response } from "express";
import { usersRepository } from "../repositories/usersRepository";

export class UsersController {
    async create(req: Request, res: Response){
        //criar usuário
        const { nome, email, senha } = req.body

        if (!nome) {
            return res.status(400).json({mensagem: 'O nome é obrigatório' })
        }

        try {
            const newUsers = usersRepository.create({nome, email, senha})

            await usersRepository.save(newUsers)

            return res.status(201).json(newUsers)
        } catch (error) {
            console.log(error);
            return res.status(500).json({mensagem: 'Internal Server Error' })
        }
    }
}
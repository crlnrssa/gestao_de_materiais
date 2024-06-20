import { Request, Response } from "express";
import { usersRepository } from "../repositories/usersRepository";
import { BadRequestError} from "../helpers/api-errors";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class UsersController {
    async create(req: Request, res: Response){
        //criar usuário
        const { nome, email, senha } = req.body

        const userExists = await usersRepository.findOneBy({email})

        if (userExists) {
            throw new BadRequestError('Email já existe')
        }

        const hashSenha = await bcrypt.hash(senha, 10)

        const newUsers = usersRepository.create({nome, email, senha: hashSenha})

        await usersRepository.save(newUsers)

        const { senha: _, ...user} = newUsers

        return res.status(201).json(user)
    }

    async login(req: Request, res: Response){
        const { email, senha } = req.body

        const user = await usersRepository.findOneBy({email})

        if (!user) {
            throw new BadRequestError('Email ou senha inválidos')
        }

        const verifySenha= await bcrypt.compare(senha, user.senha)

        if (!verifySenha) {
            throw new BadRequestError('Email ou senha inválidos')
        }

        const token = jwt.sign({ id: user.id}, process.env.JWT_PASS ?? '', { expiresIn: '8h'})

        const { senha: _, ...userLogin} = user

        return res.json({
            user: userLogin,
            token: token
        })
    }

    async getUserById(req: Request, res: Response) {
        const { id } = req.params;

        if (isNaN(Number(id))) {
            throw new BadRequestError('ID inválido');
        }

        const user = await usersRepository.findOneBy({ id: Number(id) });

        if (!user) {
            throw new BadRequestError('Usuário não encontrado');
        }

        const { senha: _, ...userInfo } = user;

        return res.json(userInfo);
    }


}
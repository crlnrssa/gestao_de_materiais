import { Request, Response } from "express";
import { materialsRepository } from "../repositories/materialsRepository";

export class MaterialsController {
    async create( req: Request, res: Response){
        const { nome, descricao, quantidade } = req.body

        try {
            const newMaterial = materialsRepository.create({ nome, descricao, quantidade })
            await materialsRepository.save(newMaterial)

            return res.status(201).json(newMaterial)
        } catch (error) {
            console.log(error);
            return res.status(500).json({mensagem: 'Internal Server Error' })
        }
    }
}
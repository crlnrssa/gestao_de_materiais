import { Request, Response } from "express";
import { materialsRepository } from "../repositories/materialsRepository";
import { BadRequestError } from "../helpers/api-errors";

export class MaterialsController {
    async create( req: Request, res: Response){
        const { nome, descricao, quantidade } = req.body

        const newMaterial = materialsRepository.create({ nome, descricao, quantidade })
        await materialsRepository.save(newMaterial)

        return res.status(201).json(newMaterial)
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { nome, descricao, quantidade } = req.body;

        if (isNaN(Number(id))) {
            throw new BadRequestError('ID inválido');
        }

        const material = await materialsRepository.findOneBy({ id: Number(id) });

        if (!material) {
            throw new BadRequestError('Material não encontrado');
        }

        if (nome !== undefined) material.nome = nome;
        if (descricao !== undefined) material.descricao = descricao;
        if (quantidade !== undefined) material.quantidade = quantidade;

        await materialsRepository.save(material);

        return res.json(material);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        if (isNaN(Number(id))) {
            throw new BadRequestError('ID inválido');
        }

        const material = await materialsRepository.findOneBy({ id: Number(id) });

        if (!material) {
            throw new BadRequestError('Material não encontrado');
        }

        await materialsRepository.remove(material);

        return res.status(204).send();
    }
}
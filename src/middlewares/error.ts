import { NextFunction, Request, Response }  from "express";
import { ApiError } from "../helpers/api-errors";

export const errorMiddleware = (error: Error & Partial<ApiError>, req: Request, res: Response , next: NextFunction) => { //declaração da função
    const statusCode = error.statusCode ?? 500 //se tiver statusCode ele será utilizado, caso não, será 500
    const menssagem = error.statusCode ? error.message : 'Internal Server Error' //mensagem a ser enviada caso n tenha uma denifinida
    return res.status(statusCode).json({menssagem}) //retorna uma resposta
}
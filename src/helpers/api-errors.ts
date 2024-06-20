export class ApiError extends Error{
    public readonly statusCode: number

    constructor(mensagem: string, statusCode: number){
        super(mensagem)
        this.statusCode = statusCode
    }
}

export class BadRequestError extends ApiError {
    constructor(mensagem: string) {
        super(mensagem, 400)
    }
}

export class NotFoundError extends ApiError {
    constructor(mensagem: string) {
        super(mensagem, 404)
    }
}

export class UnauthorizedError extends ApiError {
    constructor(mensagem: string) {
        super(mensagem, 401)
    }
}
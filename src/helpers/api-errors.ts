export class ApiError extends Error{ //estrutura para lidar com erros
    public readonly statusCode: number

    constructor(mensagem: string, statusCode: number){ //recebe a mensagem e o número de erro
        super(mensagem)
        this.statusCode = statusCode
    }
}

export class BadRequestError extends ApiError { //define a classe
    constructor(mensagem: string) { //define construtor que aceita uma mensagem de erro
        super(mensagem, 400) //passa a mensagem e o código
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
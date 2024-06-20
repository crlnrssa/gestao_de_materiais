import { Users } from "../entities/Users";

declare global {
    namespace Express {
        export interface Request {
            user: Partial<Users>;
        }
    }
}
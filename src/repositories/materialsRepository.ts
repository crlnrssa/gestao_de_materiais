import { AppDataSource } from "../data-source";
import { Materials } from "../entities/Materials";
//manipulação de dados dessa entidade no banco de dados
export const materialsRepository = AppDataSource.getRepository(Materials)
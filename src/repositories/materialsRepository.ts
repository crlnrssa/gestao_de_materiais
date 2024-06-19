import { AppDataSource } from "../data-source";
import { Materials } from "../entities/Materials";

export const materialsRepository = AppDataSource.getRepository(Materials)
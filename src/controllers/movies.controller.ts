import { Request, Response } from "express";
import { Movie } from "../entities/Movie.entity";
import { DatabaseConnectionError } from "../errors/DatabaseConnectionError.class";


export const findAll = async (request: Request, response: Response) => {

    try {
        const movies = await Movie.find();
        return response.json({
            movies
        });
    } catch (error) {
        throw new DatabaseConnectionError("")
    }


}
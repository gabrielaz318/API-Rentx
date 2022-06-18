import { verify } from "jsonwebtoken";
import { AppError } from './../errors/AppError';
import { NextFunction, Request, Response } from "express";

import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const [ , token ] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "6c224e12f25f0ad981232a4503a49d0b") as IPayload;
        
        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(user_id);

        if(!user) {
            throw new AppError("User does not exists!", 401);
        }

        req.user = {
            id: user_id
        }

        next();
    } catch (error) {
        throw new AppError("Invalid token", 401);
    }
}
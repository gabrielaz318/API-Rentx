import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

class ImportCategoriesController {
    handle(req: Request, res: Response): Response {
        const { file } = req;

        const importCategoriesUseCase = container.resolve(ImportCategoriesUseCase);

        importCategoriesUseCase.execute(file);

        return res.status(201).send();
    }

}

export { ImportCategoriesController }
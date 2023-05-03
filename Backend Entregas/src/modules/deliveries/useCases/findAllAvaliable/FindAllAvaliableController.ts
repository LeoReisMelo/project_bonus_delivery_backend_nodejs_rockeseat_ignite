import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./FindAllAvaliableUseCase";

export class FindAllAvailableController {
    async handle(request: Request, response: Response) {
        const findAllWithoutAvailableController = new FindAllAvailableUseCase();
        const deliveries = await findAllWithoutAvailableController.execute();

        return response.status(200).json(deliveries);
    }
}
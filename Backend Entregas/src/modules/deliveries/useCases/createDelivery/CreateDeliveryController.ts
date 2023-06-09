import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

export class CreateDeliveryController {
    async handle(request: Request, response: Response) {
        const { item_name } = request.body;
        const { id_client } = request;
        const createDeliveryUseCase = new CreateDeliveryUseCase();
        const result = await createDeliveryUseCase.execute({
            item_name,
            id_client
        });

        return response.status(200).json(result);
    }
}

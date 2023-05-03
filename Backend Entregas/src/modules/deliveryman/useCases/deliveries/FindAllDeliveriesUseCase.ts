import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesUseCase{
    async execute(id_deliveryman: string) {
        const deliveries = await prisma.deliveryman.findFirst({
            where: {
                id: id_deliveryman
            },
            select: {
                username: true,
                id: true,
                deliveries: true
            }
        })

        return deliveries;
    }
}
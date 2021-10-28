import { Request, Response } from "express";
import log from "../logger";
import { createMedDataMap } from "../service/medDataMap.service";

export async function createPatientMedDataMapHandler(req: Request, res: Response) {
    try {
        const medDataMap = await createMedDataMap(req.body);
        return res.status(201).send(medDataMap.toJSON());
    } catch (error: any) {
        log.error(error)
        return res.status(400).send(error.message);
    }
}
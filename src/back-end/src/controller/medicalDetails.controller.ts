import { Request, Response } from "express";
import log from "../logger";
import { getMedicalDetails, createMedicalDetails } from "../service/medicalDetails.service";


export async function createMedicalDetailsHandler(req: Request, res: Response) {
    try {
        const medical_details = await createMedicalDetails(req.body);
        return res.status(201).send(medical_details.toJSON());
    } catch (e: any) {
        log.error(e)
        return res.status(400).send(e.message);
    }
}

export async function getMedicalDetailsHandler(req: Request, res: Response) {
    try {
        const medical_details = await getMedicalDetails(req.params.mid);
        return res.send(medical_details?.toJSON());
    } catch (e: any) {
        log.error(e)
        return res.status(400).send(e.message);
    }
}
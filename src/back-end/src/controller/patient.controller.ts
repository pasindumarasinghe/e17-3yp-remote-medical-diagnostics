import { Request, Response } from "express";
import { omit } from 'lodash';
import { createPatient, getMedDetailsIdFromMap, getPatientMedDetails, updatePatientMedicalDetails } from "../service/patient.service";
import log from "../logger";
import { findOneDoctor } from "../service/doctor.service";

export async function createPatientHandler(req: Request, res: Response) {
    try {
        const patient = await createPatient(req.body);

        return res.status(201).send(omit(patient.toJSON(), "password"));

    } catch (e: any) {
        log.error(e)
        return res.status(400).send(e.message);
    }

};

export async function updatePatientMedicalDetailsHandler(req: Request, res: Response) {
    try {
        const updatedPatient = await updatePatientMedicalDetails(req.params.patient, req.query.map_key)
        return res.send(updatedPatient);
    } catch (e: any) {
        log.error(e);
        return res.status(400).send(e.message);
    }
}

export async function getPatientMedDetailsHandler(req: Request, res: Response) {
    try {
        const patientMedDetails = await getPatientMedDetails(req.params.email);
        return res.send(patientMedDetails?.toJSON());
    } catch (e: any) {
        log.error(e);
        res.status(400).send(e.message);
    }
}

export async function getMedDetailsIdFromMapHandler(req: Request, res: Response) {
    try {
        const medDetailsIdInMap = await getMedDetailsIdFromMap(req.params.id);
        return res.send(medDetailsIdInMap?.toJSON());
    } catch (e: any) {
        log.error(e);
        res.status(400).send(e.message);
    }
}


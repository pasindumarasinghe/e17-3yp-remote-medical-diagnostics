import { DocumentDefinition } from "mongoose";
import PatientMedDataMap, { PatientMedDataMapDocument } from "../model/patientMedDataMap.model";

export async function createMedDataMap(input: DocumentDefinition<PatientMedDataMapDocument>) {
    try {
        return await PatientMedDataMap.create(input);
    } catch (error: any) {
        throw new Error(error);
    }
}
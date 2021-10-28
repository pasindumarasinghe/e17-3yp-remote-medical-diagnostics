import { DocumentDefinition } from "mongoose";
import MedicalDetails, { MedicalDetailsDocument } from "../model/medicalDetails.model";

export async function createMedicalDetails(input: DocumentDefinition<MedicalDetailsDocument>) {
    try {
        return await MedicalDetails.create(input);
    } catch (error: any) {
        throw new Error(error);
    }
}


export async function getMedicalDetails(mid: string) {
    try {
        return await MedicalDetails.findOne({ _id: mid })
    }
    catch (error: any) {
        throw new Error(error);
    }
}
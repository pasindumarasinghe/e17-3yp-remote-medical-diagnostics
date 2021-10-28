import { DocumentDefinition, FilterQuery } from "mongoose";
import Patient, { PatientDocument } from "../model/patient.model";
import { omit } from "lodash";
import log from "../logger";
import PatientMedDataMap from "../model/patientMedDataMap.model";


export async function createPatient(input: DocumentDefinition<PatientDocument>) {
  try {
    return await Patient.create(input);
  } catch (error: any) {
    throw new Error(error);
  }

}
export async function getPatientMedDetails(email: string) {
  try {
    return await Patient.findOne({ email }, "name email medicalDetails");
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getMedDetailsIdFromMap(key: string) {
  try {
    return PatientMedDataMap.findOne({ _id: key }, "medical_details_id");
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function updatePatientMedicalDetails(patient: string, map_key: any) {
  try {
    return await Patient.updateOne({ email: patient }, { medicalDetails: map_key });
  } catch (error: any) {
    throw new Error(error);
  }
}


/** get the user from email and password
    @param email email of the user
    @param password password to verify
    @returns patient
 */
export async function validatePassword({
  email,
  password,
}: {
  email: PatientDocument["email"];
  password: string;
}) {
  const patient = await Patient.findOne({ email }).exec();


  if (patient == null) {
    return null;
  };


  const isValid = await patient.comparePassword(password);

  if (!isValid) {
    return null;
  }
  return omit(patient.toJSON(), "password");
}

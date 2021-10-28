import Patient from "../model/patient.model";

export async function getPatientProfileDetails(email: string) {
  const document = await Patient.findOne(
    { email },
    "name email medicalDetails"
  ).exec();
  return {
    name: document?.name,
    email: document?.email,
    medicalDetails: document?.medicalDetails,
  };
}

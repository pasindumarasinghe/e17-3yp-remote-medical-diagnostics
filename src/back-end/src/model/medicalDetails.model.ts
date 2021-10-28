import mongoose from 'mongoose';

export interface MedicalDetailsDocument extends mongoose.Document {
    height: string;//height in cm
    weight: string;//height in kg
    allergies: [string];
    diseases: [string]; //chronic diseases
    treatment_history: [object];
}

const medicalDetailsSchema = new mongoose.Schema({
    height: { type: String, required: false },
    weight: { type: String, required: false },
    allergies: { type: [String], required: false },
    diseases: { type: [String], requiredL: false },
    treatment_history: { type: [{ doctor: String, date: String, prescription: String }], required: false },
})


const MedicalDetails = mongoose.model<MedicalDetailsDocument>("MedicalDetails", medicalDetailsSchema);

export default MedicalDetails;
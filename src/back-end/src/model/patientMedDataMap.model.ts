import mongoose from 'mongoose';

export interface PatientMedDataMapDocument extends mongoose.Document {
    medical_details_id: string;
}

const patientMedDataMapSchema = new mongoose.Schema({
    medical_details_id: { type: String, required: true },
})

const PatientMedDataMap = mongoose.model<PatientMedDataMapDocument>("PatientMedDataMap", patientMedDataMapSchema);
export default PatientMedDataMap;
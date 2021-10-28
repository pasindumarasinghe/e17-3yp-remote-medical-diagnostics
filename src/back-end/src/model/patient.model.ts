import mongoose from "mongoose";
import Config from "../config/default";
import bcrypt from "bcrypt";
//bcrypt uses a symmetric-key block cipher called Blowfish for hashing passwords 

export interface PatientDocument extends mongoose.Document {
    email: string,
    name: string,
    password: string,
    age: number,
    gender: string,
    mobileNo: string,
    homeAddress?: string,
    medicalDetails: string,
    comparePassword(enteredPassword: string): Promise<boolean>;
}

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    mobileNo: { type: String, required: false },
    homeAddress: { type: String, required: false },
    medicalDetails: { type: String, required: false },
},
    { timestamps: true }
);

PatientSchema.methods.comparePassword = async function (enteredPassword: string) {
    const patient = this as PatientDocument;

    //entered password is plaintext; patient.password is a hash
    return bcrypt.compare(enteredPassword, patient.password).catch((e) => false);
}

//Pre middleware functions are executed one after another, when each middleware calls next
PatientSchema.pre("save", async function (next: mongoose.HookNextFunction) {
    let patient = this as PatientDocument;

    //return to the next function if the password is not modified
    //(if !modified the function is already hashed)
    if (!patient.isModified("password")) return next();

    //a random string to make the hash unpredictable 
    const salt = await bcrypt.genSalt(Config.saltWorkFactor);
    const hash = await bcrypt.hash(patient.password, salt);

    patient.password = hash;
});

const Patient = mongoose.model<PatientDocument>("Patient", PatientSchema);


export default Patient;
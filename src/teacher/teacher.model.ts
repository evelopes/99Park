import * as mongoose from 'mongoose';

export const TeacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tia: { type: String, required: true },
    course: { type: String, required: true },
    img: { type: String},
})

export interface Teacher extends mongoose.Document {
    id: string;
    name: string;
    tia: string;
    course: string;
    img: string;
}
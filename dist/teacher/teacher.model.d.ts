import * as mongoose from 'mongoose';
export declare const TeacherSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name: string;
    tia: string;
    course: string;
    img?: string;
}>;
export interface Teacher extends mongoose.Document {
    id: string;
    name: string;
    tia: string;
    course: string;
    img: string;
}

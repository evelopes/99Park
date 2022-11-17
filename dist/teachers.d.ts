import * as mongoose from 'mongoose';
export declare const TeacherSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    nome: string;
    tia: string;
    curso: string;
}>;
export interface Teacher {
    id: string;
    nome: string;
    tia: string;
    curso: string;
}

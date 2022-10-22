import * as mongoose from 'mongoose';

export const ClientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true}
})

export interface Client extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    senha: string;
}
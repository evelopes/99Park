"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherSchema = void 0;
const mongoose = require("mongoose");
exports.TeacherSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    tia: { type: String, required: true },
    curso: { type: String, required: true },
});
//# sourceMappingURL=teachers.model.js.map
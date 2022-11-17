"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherSchema = void 0;
const mongoose = require("mongoose");
exports.TeacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tia: { type: String, required: true },
    course: { type: String, required: true },
});
//# sourceMappingURL=teacher.model.js.map
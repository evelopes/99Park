"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TeacherService = class TeacherService {
    constructor(teacherModel) {
        this.teacherModel = teacherModel;
    }
    async createTeacher(teacher) {
        const teacherModel = new this.teacherModel({
            name: teacher.name,
            tia: teacher.tia,
            course: teacher.course,
            img: teacher.img
        });
        const result = await teacherModel.save();
        return result.id;
    }
    async readTeachers() {
        const teachers = await this.teacherModel.find().exec();
        return teachers;
    }
    async readTeacher(tia) {
        const teacher = await this.teacherModel.findOne({ tia: tia }).exec();
        return teacher;
    }
    async updateTeacher(teacher) {
        const updateTeacher = await this.teacherModel.findOne({ tia: teacher.tia });
        if (!updateTeacher) {
            throw new common_1.NotFoundException('Não foi possível encontrar o professor!');
        }
        if (teacher.name) {
            updateTeacher.name = teacher.name;
        }
        if (teacher.course) {
            updateTeacher.course = teacher.course;
        }
        if (teacher.img) {
            updateTeacher.img = teacher.img;
        }
        updateTeacher.save();
    }
    async deleteTeacher(tia) {
        const result = await this.teacherModel.deleteOne({ tia: tia }).exec();
        if (!result) {
            throw new common_1.NotFoundException('Não foi possível deletar o professor!');
        }
    }
};
TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Teacher')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TeacherService);
exports.TeacherService = TeacherService;
//# sourceMappingURL=teacher.service.js.map
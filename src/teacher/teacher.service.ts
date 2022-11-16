import { Injectable, NotFoundException } from '@nestjs/common';
import { Teacher } from 'src/teacher/teacher.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TeacherService {

    teachers: Teacher[];

    constructor(@InjectModel('Teacher') private readonly teacherModel: Model<Teacher>) { }

    //create
    async createTeacher(teacher: Teacher) {
        const teacherModel = new this.teacherModel(
            {
                name: teacher.name,
                tia: teacher.tia,
                course: teacher.course
            }
        );
        const result = await teacherModel.save();
        return result.id as string;
    }

    //read
    async readTeachers() {
        const teachers = await this.teacherModel.find().exec();
        return teachers;
    }


    //read by tia
    async readTeacher(tia: string) {
        const teacher = await this.teacherModel.findOne({ tia: tia }).exec();
        return teacher;
    }

    //update
    async updateTeacher(teacher: Teacher) {
        const updateTeacher = await this.teacherModel.findOne({ tia: teacher.tia });
        if (!updateTeacher) {
            throw new NotFoundException('Não foi possível encontrar o professor!');
        }
        if (teacher.name) {
            updateTeacher.name = teacher.name;
        }
        if (teacher.course) {
            updateTeacher.course = teacher.course;
        }
        updateTeacher.save()
    }


    //delete
    async deleteTeacher(tia: number) {
        const result = await this.teacherModel.deleteOne({ tia: tia }).exec();
        if (!result) {
            throw new NotFoundException('Não foi possível deletar o professor!')
        }
    }

}

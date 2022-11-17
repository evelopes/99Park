import { Teacher } from 'src/teacher/teacher.model';
import { Model } from 'mongoose';
export declare class TeacherService {
    private readonly teacherModel;
    teachers: Teacher[];
    constructor(teacherModel: Model<Teacher>);
    createTeacher(teacher: Teacher): Promise<string>;
    readTeachers(): Promise<(Teacher & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    readTeacher(tia: string): Promise<Teacher & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateTeacher(teacher: Teacher): Promise<void>;
    deleteTeacher(tia: number): Promise<void>;
}

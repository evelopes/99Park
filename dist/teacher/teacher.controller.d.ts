import { Teacher } from 'src/teacher/teacher.model';
import { TeacherService } from './teacher.service';
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    readAllTeachers(): Promise<any>;
    readTeacher(tia: string): Promise<any>;
    createTeacher(teacher: Teacher): Promise<any>;
    updateTeacher(teacher: Teacher): Promise<void>;
    deleteTeacher(tia: number): Promise<any>;
}

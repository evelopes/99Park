import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Teacher } from 'src/teacher/teacher.model';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {
    constructor(private readonly teacherService: TeacherService) { }

    @Get()
    readAllTeachers(): Promise<any> {
        return this.teacherService.readTeachers();
    }

    @Get(':tia')
    readTeacher(@Param('tia') tia: string): Promise<any> {
        return this.teacherService.readTeacher(tia);
    }

    @Post()
    async createTeacher(@Body() teacher: Teacher): Promise<any> {
        var resposta = await this.teacherService.createTeacher(teacher);
        return { id: resposta };
    }

    @Patch()
    async updateTeacher(@Body() teacher: Teacher) {
        await this.teacherService.updateTeacher(teacher);
    }

    @Delete(':tia')
    async deleteTeacher(@Param('tia') tia: number) {
        await this.teacherService.deleteTeacher(tia);
        return null;
    }


};
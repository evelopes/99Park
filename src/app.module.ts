import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherSchema } from './teacher/teacher.model';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://eve:mackenzie@teacherdb.9ytbknq.mongodb.net/?retryWrites=true&w=majority'), MongooseModule.forFeature([{ name: 'Teacher', schema: TeacherSchema }]), TeacherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':peso' + '/' + ':altura')
  getHello(@Param('peso') peso, @Param('altura') altura): number {
    return this.appService.getHello(peso, altura);
  }
}

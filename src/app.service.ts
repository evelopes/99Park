import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(peso: number, altura: number): number {
    return peso / (altura * altura);
  }
}

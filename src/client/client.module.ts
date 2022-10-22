import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { ClientSchema } from './client.model';


@Module({
  imports: [MongooseModule.forFeature([{name: 'Client', schema: ClientSchema}]) ],
  controllers: [ClientController],
  providers: [ClientService]
})
export class ClientModule {}

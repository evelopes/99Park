import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Client } from './client.model';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
    constructor(private readonly clientService: ClientService){}

    @Get()
    readAllClients(): Promise<any>{
        return this.clientService.readClients();
    }

    @Post()
    async createClient(@Body() client: Client): Promise<any>{
        var response = await this.clientService.createClient(client);
        return {id: response};
    }

    @Patch()
    async updateClient(@Body() client: Client){
        await this.clientService.updateClient(client);
    }

    @Delete(':name')
    async deleteClient(@Param('name') name: string){
        await this.clientService.deleteClient(name);
        return null;
    }


}

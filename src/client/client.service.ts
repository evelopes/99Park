import { Injectable, NotFoundException } from '@nestjs/common';
import { Client } from './client.model';
import { InjectModel } from '@nestjs/mongoose/dist';
import { Model } from 'mongoose';

@Injectable()
export class ClientService {
    constructor( @InjectModel('Client') private readonly clientModel: Model<Client>){}

    //crud
    //create
    async createClient(client: Client){
        const clientModel = new this.clientModel(
            {
              name : client.name,
              email: client.email,
              senha: client.senha
            }
        );
        const result = await clientModel.save();
        return result.id as string;
    }

    //read
    async readClients(){
        const clients = await this.clientModel.find().exec();
        return clients;
    }

    //update - patch
    async updateClient(client:Client){
        const updateClient = await this.clientModel.findOne({name: client.name});
        if(!updateClient){
            throw new NotFoundException('Não encontramos o Cliente')
        }if(client.name){
            updateClient.name = client.name;
        }if(client.email){
            updateClient.email = client.email;
        }if(client.senha){
            updateClient.senha = client.senha;
        }updateClient.save();
    }


    //delete
    async deleteClient(name: string){
        const result = await this.clientModel.deleteOne({name: name}).exec();
        if(!result){
            throw new NotFoundException('Não encontramos o Cliente');
        }
    }
}

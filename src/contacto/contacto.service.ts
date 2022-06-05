import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactoDTO } from './dto/contacto.dto';
import { Contacto } from './entity/contacto.entity';
import { schema } from './shema/contacto.schema';


@Injectable()
export class ContactoService {

    constructor(
    @InjectRepository(schema) private readonly contactoRepository: Repository<Contacto>
    ){}

    async findAll():Promise<Contacto[]>{
      const data = await this.contactoRepository.find();
      return data
    }
    
    async findOne(id) {
      const data= await this.contactoRepository.findOne(id);
      console.log(id);
      if(!data) throw new NotFoundException("sdas aasfssdfaaswd");
      return data;
    }

    async insertcontacto(contactoNew: CreateContactoDTO){
        const data = this.contactoRepository.create(contactoNew)
        return await this.contactoRepository.save(data);
    }
    
      async update(id , updateContactoDto: CreateContactoDTO){
        const data= await this.contactoRepository.findOne(id);
        if(!data) throw new NotFoundException('no existe el dato');
        const update= Object.assign(data,updateContactoDto);
        return await this.contactoRepository.save(update);
      }
    
      async remove(id) {
        return await this.contactoRepository.delete(id);
      }
}

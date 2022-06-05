import { Delete, Get, Module, Patch, Post, Put } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactoController } from './contacto.controller';
import { ContactoService } from './contacto.service';
import { Contacto } from './entity/contacto.entity';
import { schema } from './shema/contacto.schema';

@Module({
  imports:[
    TypeOrmModule.forFeature([schema])
  ],
  controllers: [ContactoController],
  providers: [ContactoService]
})
export class ContactoModule {}

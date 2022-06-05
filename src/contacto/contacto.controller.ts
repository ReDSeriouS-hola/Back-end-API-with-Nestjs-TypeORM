import { Controller, Delete, Param, Patch } from '@nestjs/common';
import { Get, Post,Body } from '@nestjs/common';
import { CreateContactoDTO } from './dto/contacto.dto';
import { ContactoService } from './contacto.service';


@Controller('contacto')
export class ContactoController {
    constructor(

        private readonly contactoService: ContactoService

    ){}


        @Get()
        findall(){
            return this.contactoService.findAll();
        }

        @Post('/create')
        async insertContacto(@Body() createContacto:CreateContactoDTO){
            console.log(createContacto);
            return await this.contactoService.insertcontacto(createContacto);
        }

        @Get(':id')
        findOne(@Param('id') id:number)  {
          return this.contactoService.findOne(id);
        }
      
        @Patch(':id')
        update(@Param('id') id:number, @Body() updateContactoDto: CreateContactoDTO) {
          return this.contactoService.update(id, updateContactoDto);
        }
      
        @Delete(':id')
        remove(@Param('id') id: number) {
          return this.contactoService.remove(id);
        }

}

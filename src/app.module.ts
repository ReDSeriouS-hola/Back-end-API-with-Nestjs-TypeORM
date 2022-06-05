import { Module } from '@nestjs/common';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactoModule } from './contacto/contacto.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mongodb',
    url:'mongodb+srv://1802278:1802278@cluster0.hmxrh3j.mongodb.net/?retryWrites=true&w=majority',
    port:27017,
    database:"contactos-API-Nest",
    username:'1802278',
    password: "1802278",
    useNewUrlParser:true,
    autoLoadEntities:true,
    useUnifiedTopology: true,
    entities: [join(__dirname, '**/**.entity{.ts,.js}')]
    }),
    ContactoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

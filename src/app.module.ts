import { Module } from '@nestjs/common';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactoModule } from './contacto/contacto.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type:'YOUR DATA-BASE SOURCE TYPE HERE',
    url:'YOR-DATA-BASE SOURCE HERE',
    port:27017,
    database:"THE NAME OF THE DATA-BASE HERE",
    username:'USERNAME',
    password: "PASSWORD",
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

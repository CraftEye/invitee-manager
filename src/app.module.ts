import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './common/database/databse.module';
import { PersonModule } from './person/person.module';
import { HouseModule } from './house/house.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [DatabaseModule, PersonModule, HouseModule, EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './common/database/databse.module';
import { PersonModule } from './person/person.module';
import { HouseModule } from './house/house.module';
import { EventModule } from './event/event.module';
import { FamilyModule } from './family/family.module';
import { SampleModule } from './sample/sample.module';

@Module({
  imports: [
    DatabaseModule,
    PersonModule,
    HouseModule,
    EventModule,
    FamilyModule,
    SampleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

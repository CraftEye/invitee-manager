import { Module } from '@nestjs/common';
import { HouseService } from './service/house.service';
import { HouseController } from './controller/house.controller';

@Module({
  providers: [HouseService],
  controllers: [HouseController]
})
export class HouseModule {}

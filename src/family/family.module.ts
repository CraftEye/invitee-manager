import { Module } from '@nestjs/common';
import { FamilyService } from './service/family.service';
import { FamilyController } from './controller/family.controller';

@Module({
  providers: [FamilyService],
  controllers: [FamilyController]
})
export class FamilyModule {}

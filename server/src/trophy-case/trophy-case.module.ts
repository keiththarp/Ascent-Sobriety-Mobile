import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrophyCaseService } from './trophy-case.service';
import { TrophyCaseController } from './trophy-case.controller';
import { TrophyCase } from './trophy-case.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrophyCase])],
  exports: [TypeOrmModule],
  providers: [TrophyCaseService],
  controllers: [TrophyCaseController]
})
export class TrophyCaseModule {}

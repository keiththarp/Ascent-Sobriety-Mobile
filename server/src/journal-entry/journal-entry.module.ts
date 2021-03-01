import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JournalEntryService } from './journal-entry.service';
import { JournalEntryController } from './journal-entry.controller';
import { JournalEntry } from './journal-entry.entity';


@Module({
  imports: [TypeOrmModule.forFeature([JournalEntry])],
  exports: [TypeOrmModule],
  providers: [JournalEntryService],
  controllers: [JournalEntryController]
})
export class JournalEntryModule {}

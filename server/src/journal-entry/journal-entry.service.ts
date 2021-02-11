import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JournalEntry } from './journal-entry.entity';
import { CreateJournalEntryDTO } from './dto/create-journalEntry.dto';

@Injectable()
export class JournalEntryService {
    constructor(
        @InjectRepository(JournalEntry)
        private journalEntryRepository: Repository<JournalEntry>
    ) {}

    create(createJournalEntryDTO: CreateJournalEntryDTO): Promise<JournalEntry> {
        const journalEntry = new JournalEntry();
        journalEntry._id = createJournalEntryDTO._id;
        journalEntry.title = createJournalEntryDTO.title;
        journalEntry.date = createJournalEntryDTO.date;
        journalEntry.journalEntry = createJournalEntryDTO.journalEntry;
        journalEntry.user = createJournalEntryDTO.user;
        journalEntry.sobrietyMaintained = createJournalEntryDTO.sobrietyMaintained;
        journalEntry.vibeCheck = createJournalEntryDTO.vibeCheck;
        journalEntry.currentDayOfSobriety = createJournalEntryDTO.currentDayOfSobriety;

        return this.journalEntryRepository.save(journalEntry);
    }

    findAll(): Promise<JournalEntry[]> {
        return this.journalEntryRepository.find();
    }

    findOne(id: string): Promise<JournalEntry> {
        return this.journalEntryRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.journalEntryRepository.delete(id);
    }
}

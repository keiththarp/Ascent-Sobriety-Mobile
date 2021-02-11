import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateJournalEntryDTO } from './dto/create-journalEntry.dto';
import { JournalEntry } from './journal-entry.entity';
import { JournalEntryService } from './journal-entry.service';

@Controller('api/journal-entry')
export class JournalEntryController {
    constructor(private readonly journalEntryService: JournalEntryService) {}

    @Post()
    create(@Body() createJournalEntryDTO: CreateJournalEntryDTO): Promise<JournalEntry> {
        return this.journalEntryService.create(createJournalEntryDTO);
    }

    @Get()
    findAll(): Promise<JournalEntry[]> {
        return this.journalEntryService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<JournalEntry> {
        return this.journalEntryService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.journalEntryService.remove(id);
    }
}

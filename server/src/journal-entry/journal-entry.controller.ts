import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateJournalEntryDTO } from './dto/create-journalEntry.dto';
import { JournalEntry } from './journal-entry.entity';
import { JournalEntryService } from './journal-entry.service';

@Controller('api/journal-entry')
export class JournalEntryController {
    constructor(private readonly journalEntryService: JournalEntryService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createJournalEntryDTO: CreateJournalEntryDTO): Promise<JournalEntry> {
        return this.journalEntryService.create(createJournalEntryDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':userID')
    findAll(@Param('userID') userID: string): Promise<JournalEntry[]> {
        return this.journalEntryService.findAll(userID);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<JournalEntry> {
        return this.journalEntryService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.journalEntryService.remove(id);
    }
}

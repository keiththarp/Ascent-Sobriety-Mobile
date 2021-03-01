import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTrophyCaseDTO } from './dto/create-trophyCase.dto';
import { TrophyCase } from './trophy-case.entity';
import { TrophyCaseService } from './trophy-case.service';

@Controller('api/trophy-case')
export class TrophyCaseController {
    constructor(private readonly trophyCaseService: TrophyCaseService) {}

    @Post()
    create(@Body() createTrophyCaseDTO: CreateTrophyCaseDTO): Promise<TrophyCase> {
        return this.trophyCaseService.create(createTrophyCaseDTO);
    }

    @Get()
    findAll(): Promise<TrophyCase[]> {
        return this.trophyCaseService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<TrophyCase> {
        return this.trophyCaseService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.trophyCaseService.remove(id);
    }
}

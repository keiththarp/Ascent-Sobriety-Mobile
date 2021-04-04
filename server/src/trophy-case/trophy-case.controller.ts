import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateTrophyCaseDTO } from './dto/create-trophyCase.dto';
import { TrophyCase } from './trophy-case.entity';
import { TrophyCaseService } from './trophy-case.service';

@Controller('api/trophy-case')
export class TrophyCaseController {
    constructor(private readonly trophyCaseService: TrophyCaseService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createTrophyCaseDTO: CreateTrophyCaseDTO): Promise<TrophyCase> {
        return this.trophyCaseService.create(createTrophyCaseDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':userID')
    findAll(@Param('userID') userID: string): Promise<TrophyCase[]> {
        return this.trophyCaseService.findAll(userID);
    }

    @UseGuards(JwtAuthGuard)
    @Get('singleTrophy/:id')
    findOne(@Param('id') id: string): Promise<TrophyCase> {
        return this.trophyCaseService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.trophyCaseService.remove(id);
    }
}

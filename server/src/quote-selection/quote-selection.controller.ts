import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateQuoteDTO } from './dto/create-quote.dto';
import { QuoteSelection } from './quote-selection.entity';
import { QuoteSelectionService } from './quote-selection.service';


@Controller('api/quote-selection')
export class QuoteSelectionController {
    constructor(private readonly quoteSelectionService: QuoteSelectionService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createQuoteDTO: CreateQuoteDTO): Promise<QuoteSelection> {
        return this.quoteSelectionService.create(createQuoteDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(): Promise<QuoteSelection[]> {
        return this.quoteSelectionService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<QuoteSelection> {
        return this.quoteSelectionService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.quoteSelectionService.remove(id);
    }
}

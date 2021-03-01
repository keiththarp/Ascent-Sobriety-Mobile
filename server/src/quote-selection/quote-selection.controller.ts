import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateQuoteDTO } from './dto/create-quote.dto';
import { QuoteSelection } from './quote-selection.entity';
import { QuoteSelectionService } from './quote-selection.service';


@Controller('api/quote-selection')
export class QuoteSelectionController {
    constructor(private readonly quoteSelectionService: QuoteSelectionService) {}

    @Post()
    create(@Body() createQuoteDTO: CreateQuoteDTO): Promise<QuoteSelection> {
        return this.quoteSelectionService.create(createQuoteDTO);
    }

    @Get()
    findAll(): Promise<QuoteSelection[]> {
        return this.quoteSelectionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<QuoteSelection> {
        return this.quoteSelectionService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.quoteSelectionService.remove(id);
    }
}

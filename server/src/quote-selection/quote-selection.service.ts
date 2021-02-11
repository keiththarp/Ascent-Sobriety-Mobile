import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuoteSelection } from './quote-selection.entity';
import { CreateQuoteDTO } from './dto/create-quote.dto';

@Injectable()
export class QuoteSelectionService {
    constructor(
        @InjectRepository(QuoteSelection)
        private quoteRepository: Repository<QuoteSelection>
    ) {}

    create(createQuoteDTO: CreateQuoteDTO): Promise<QuoteSelection> {
        const quote = new QuoteSelection();
        quote._id = createQuoteDTO._id;
        quote.quote = createQuoteDTO.quote;
        quote.author = createQuoteDTO.author;

        return this.quoteRepository.save(quote);
    }

    findAll(): Promise<QuoteSelection[]> {
        return this.quoteRepository.find();
    }

    findOne(id: string): Promise<QuoteSelection> {
        return this.quoteRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.quoteRepository.delete(id);
    }
}

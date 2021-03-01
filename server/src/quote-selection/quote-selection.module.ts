import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuoteSelectionService } from './quote-selection.service';
import { QuoteSelectionController } from './quote-selection.controller';
import { QuoteSelection } from './quote-selection.entity';


@Module({
  imports: [TypeOrmModule.forFeature([QuoteSelection])],
  exports: [TypeOrmModule],
  providers: [QuoteSelectionService],
  controllers: [QuoteSelectionController]
})
export class QuoteSelectionModule {}

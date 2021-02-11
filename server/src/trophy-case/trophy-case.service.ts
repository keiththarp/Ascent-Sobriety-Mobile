import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TrophyCase } from './trophy-case.entity';
import { CreateTrophyCaseDTO } from './dto/create-trophyCase.dto';

@Injectable()
export class TrophyCaseService {
    constructor(
        @InjectRepository(TrophyCase)
        private trophyCaseRepository: Repository<TrophyCase>
    ) {}

    create(createTrophyCaseDTO: CreateTrophyCaseDTO): Promise<TrophyCase> {
        const trophy = new TrophyCase();
        trophy._id = createTrophyCaseDTO._id;
        trophy.user = createTrophyCaseDTO.user;
        trophy.daysSober = createTrophyCaseDTO.daysSober;
        trophy.startDate = createTrophyCaseDTO.startDate;
        trophy.endDate = createTrophyCaseDTO.endDate;

        return this.trophyCaseRepository.save(trophy);
    }

    findAll(): Promise<TrophyCase[]> {
        return this.trophyCaseRepository.find();
    }

    findOne(id: string): Promise<TrophyCase> {
        return this.trophyCaseRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.trophyCaseRepository.delete(id);
    }
}

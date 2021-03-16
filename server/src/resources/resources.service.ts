import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resource } from './resources.entity';
import { CreateResourceDTO } from './dto/create-resource.dto';

@Injectable()
export class ResourcesService {
    constructor(
        @InjectRepository(Resource)
        private resourceRepository: Repository<Resource> 
    ) {}

    create(createResourceDTO: CreateResourceDTO): Promise<Resource> {
        const resource = new Resource();
        resource._id = createResourceDTO._id;
        resource.title = createResourceDTO.title;
        resource.introText = createResourceDTO.introText;
        resource.linkToResource = createResourceDTO.linkToResource;
        resource.imageLink = createResourceDTO.imageLink;
        resource.phoneNumber = createResourceDTO.phoneNumber;
        resource.category = createResourceDTO.category;

        return this.resourceRepository.save(resource);
    }

    findAll(): Promise<Resource[]> {
        return this.resourceRepository.find();
    }

    findOne(id: string): Promise<Resource> {
        return this.resourceRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.resourceRepository.delete(id);
    }
}

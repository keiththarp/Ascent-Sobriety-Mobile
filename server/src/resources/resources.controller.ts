import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateResourceDTO } from './dto/create-resource.dto';
import { Resource } from './resources.entity';
import { ResourcesService } from './resources.service';

@Controller('api/resources')
export class ResourcesController {
    constructor(private readonly resourcesService: ResourcesService) {}

    @Post()
    create(@Body() createResourceDTO: CreateResourceDTO): Promise<Resource> {
        return this.resourcesService.create(createResourceDTO);
    }

    @Get()
    findAll(): Promise<Resource[]> {
        return this.resourcesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Resource> {
        return this.resourcesService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.resourcesService.remove(id);
    }
}

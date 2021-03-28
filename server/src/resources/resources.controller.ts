import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateResourceDTO } from './dto/create-resource.dto';
import { Resource } from './resources.entity';
import { ResourcesService } from './resources.service';

@Controller('api/resources')
export class ResourcesController {
    constructor(private readonly resourcesService: ResourcesService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createResourceDTO: CreateResourceDTO): Promise<Resource> {
        return this.resourcesService.create(createResourceDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(): Promise<Resource[]> {
        return this.resourcesService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Resource> {
        return this.resourcesService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.resourcesService.remove(id);
    }
}

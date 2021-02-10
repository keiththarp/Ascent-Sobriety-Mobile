import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() createUserDTO: CreateUserDTO): Promise<User> {
        return this.userService.create(createUserDTO);
    }

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
        return this.userService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.userService.remove(id);
    }
}

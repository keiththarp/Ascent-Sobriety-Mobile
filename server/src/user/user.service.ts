import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    create(createUserDTO: CreateUserDTO): Promise<User> {
        const user = new User();
        user._id = createUserDTO._id;
        user.email = createUserDTO.email;
        user.password = createUserDTO.password;
        user.name = createUserDTO.name;
        user.initialSobrietyDate = createUserDTO.initialSobrietyDate;
        user.totalSoberDays = createUserDTO.totalSoberDays;
        user.newSobrietyDate = createUserDTO.newSobrietyDate;
        user.consecutiveSoberDays = createUserDTO.consecutiveSoberDays;
        user.profileImage = createUserDTO.profileImage;

        return this.usersRepository.save(user);
    }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
}

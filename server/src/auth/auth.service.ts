import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.userService.userLogIn(email);
        const match = await bcrypt.compare(pass, user.password);

        if (match) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }
}

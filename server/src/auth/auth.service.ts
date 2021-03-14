import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, 
        private jwtService: JwtService) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.userService.userLogIn(email);
        const match = await bcrypt.compare(pass, user.password);

        if (match) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }

      async login(user: any) {
          const payload = { email: user.email, sub: user._id};

          return {
              access_token: this.jwtService.sign(payload),
          };
      }
}

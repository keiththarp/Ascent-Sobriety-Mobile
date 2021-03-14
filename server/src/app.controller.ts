import { Controller, Request, Get, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { CreateUserDTO } from './user/dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('auth/signup')
  async signUp(@Body() createUserDTO:CreateUserDTO) {
    return this.authService.signUp(createUserDTO);
  }
  
}

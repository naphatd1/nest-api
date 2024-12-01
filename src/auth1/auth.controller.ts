import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller({
  path: 'auth', // localhost:4000/api/v1/auth
  version: '1',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  // localhost:4000/api/v1/auth/register
  @Post('register')
  @HttpCode(201)
  async register(@Body() registerDto: RegisterDto) {
    await this.authService.register(registerDto);
    return {
      message: 'ลงทะเบียนสำเร็จ',
    };
  }
  // localhost:4000/api/v1/auth/register
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.authService.findAll();
  }

  // localhost:4000/api/v1/auth/login
  @Post('login')
  @HttpCode(200)
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }
}

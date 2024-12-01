import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller({
  path: 'auth', // localhost:4000/api/v1/auth
  version: '1',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // localhost:4000/api/v1/auth/register
  @Post('register')
  @HttpCode(201)
  async register(@Body() registerDto: RegisterDto) {
    await this.authService.register(registerDto);
    return {
      message: 'ลงทะเบียนสำเร็จ',
    };
  }
  @Get() // localhost:4000/api/v1/auth/register
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

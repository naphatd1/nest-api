import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';
import { RegisterDto } from './dto/register.dto';
import { compare, genSalt, hash } from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  jwtService: JwtService;
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async register(registerDto: RegisterDto) {
    const user = await this.userModel.findOne({
      where: { email: registerDto.email },
    });
    if (user) {
      throw new BadRequestException('มีอีเมล์นี้ในระบบแล้ว โปรดลองใหม่');
    }
    // hash password
    const salt = await genSalt(10);
    const hashedPassword = await hash(registerDto.password, salt);

    // create new user
    const newUser = await this.userModel.create({
      fullname: registerDto.fullname,
      email: registerDto.email,
      password: hashedPassword,
    });
    return newUser;
  }
  async findAll(): Promise<User[]> {
    return await this.userModel.findAll({
      order: [['id', 'desc']],
    });
  }

  // login
  async login(loginDto: LoginDto) {
    // เช็คว่ามี email ในระบบหรือไม่
    const user = await this.userModel.findOne({
      where: { email: loginDto.email },
    });
    if (!user) {
      throw new UnauthorizedException('ไม่พบผู้ใช้นี้ในระบบ'); // 401
    }
    // เปรียบเทียบรหัสผ่าน
    const isValid = await compare(loginDto.password, user.password);
    if (!isValid) {
      throw new UnauthorizedException('รหัสผ่านไม่ถูกต้อง'); // 401
    }

    // gen jwt token
    const payload = { user_id: user.id };
    const token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
    });

    return { access_token: token };
  }
}

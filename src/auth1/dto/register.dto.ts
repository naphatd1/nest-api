import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'ชื่อ-สกุล ห้ามว่าง' })
  fullname: string;

  @IsNotEmpty({ message: 'อีเมล์ ห้ามว่าง' })
  @IsEmail({}, { message: 'รูปแบบอีเมล์ไม่ถูกต้อง' })
  email: string;

  @IsNotEmpty({ message: 'รหัสผ่าน ห้ามว่าง' })
  password: string;
}

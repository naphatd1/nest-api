import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UtilityModule } from './shared/utility/utility.module';
import { GlobalHelperModule } from './shared/global-helper/global-helper.module';
import { CustomerModule } from './customer/customer.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';
import { Customer } from './customer/entities/customer.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: process.env.DB_DIALECT as Dialect,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_DATABASE,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      models: [Customer, User],
      autoLoadModels: true,
      // sync: {}, // สร้างเฉพาะตารางที่ยังไม่มี
      // sync: { force: true }, // ลบตารางทั้งหมด แล้วสร้างใหม่ (ระวัง data หาย)
      sync: { alter: true }, // ไม่ลบตาราง แก้เฉพาะคอลัมน์นั้นๆ (ระวัง data คอลัมน์ที่แก้หายด้วย)
      pool: {
        max: 10, // จำนวน connection สูงสุดใน pool
        min: 0, // จำนวน connection ขั้นต่ำใน pool
        idle: 30000, // ปล่อย connection ถ้าไม่ได้ใช้งานเกิน 30 วินาที
      },
    }),
    ProductModule,
    UtilityModule,
    GlobalHelperModule,
    CustomerModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

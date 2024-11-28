import { Global, Module } from '@nestjs/common';
import { GlobalHelperService } from './global-helper.service';

@Global() // 1. ตั้งค่า global module ที่ไฟล์ global module 2. ทำการ exports: [GlobalHelperService]
@Module({
  providers: [GlobalHelperService],
  exports: [GlobalHelperService],
})
export class GlobalHelperModule {}

import { Controller } from '@nestjs/common';

@Controller({
  path: 'auth', // localhost:4000/api/v1/auth
  version: '1',
})
export class AuthController {}

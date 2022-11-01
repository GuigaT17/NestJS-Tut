import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { msg: 'Im signup' };
  }

  signin() {
    return 'im signin';
  }
}

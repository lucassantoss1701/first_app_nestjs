import { Injectable } from '@nestjs/common';

@Injectable()
export class Testservice {
  getTest(): string {
    return 'Teste deu certo!';
  }
}

import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity' 

@Controller('users')
export class UserController {
  constructor(private readonly userservice: UserService) {}

  @Get()
  async getAllUser(): Promise<User[]> {
    return this.userservice.findAll();
  }
}

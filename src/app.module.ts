import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TestController} from './controllers/Testcontroller'
import { Testservice } from './services/Testservice';
import { UserModule } from './usuario/user.model';

@Module({
  imports: [
    UserModule
  ],
  controllers: [AppController, TestController],
  providers: [AppService, Testservice],
})
export class AppModule {}

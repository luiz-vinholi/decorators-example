import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserStepModule } from './user-step/user-step.module';

@Module({
  imports: [UserModule, UserStepModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

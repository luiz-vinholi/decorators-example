import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserStepModule } from 'src/user-step/user-step.module';
import { UpdateUserAndStepUseCase } from './use-cases/update-user-and-step.use-case';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [UserStepModule],
  controllers: [UserController],
  providers: [
    UserService,
    UpdateUserAndStepUseCase,
  ],
  exports: [UserService],
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { UserStepService } from './services/user-step.service';

@Module({
  providers: [UserStepService],
  exports: [UserStepService],
})
export class UserStepModule {}

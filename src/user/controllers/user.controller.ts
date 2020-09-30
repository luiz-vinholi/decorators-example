import { UpdateUserAndStepUseCase } from "../use-cases/update-user-and-step.use-case";
import { Patch, Param, Controller } from "@nestjs/common";

@Controller('/users')
export class UserController {
  
  constructor(
    private readonly updateUserAndStepUseCase: UpdateUserAndStepUseCase,
  ) {}

  @Patch('/:userId')
  public updateUserAndStep(
    @Param('userId')
    userId: string
  ) {
    return this.updateUserAndStepUseCase.execute(userId)
  }

}
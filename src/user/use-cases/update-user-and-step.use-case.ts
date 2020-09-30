import { IUseCase } from "src/common/interfaces/use-case.interface";
import { Injectable, OnModuleInit } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { UpdateUserStep } from "../decorators/update-user-step.decorator";

@Injectable()
export class UpdateUserAndStepUseCase implements IUseCase, OnModuleInit {

  constructor(
    private readonly userService: UserService,
  ) {}

  onModuleInit() {
    this.execute('PIMBA')
  }

  @UpdateUserStep()
  public execute(userId: string) {
    this.userService.updateUser(userId)
  }

}
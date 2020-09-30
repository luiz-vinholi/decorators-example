import { Injectable } from "@nestjs/common";
import { IUserStepService } from "../interfaces/user-step-service.interface";

@Injectable()
export class UserStepService implements IUserStepService {

  public updateStep(userId: string) {
    console.log(`${UserStepService.name}: Update user step with user id: ${userId}`)
  }
  
}
import { Injectable } from "@nestjs/common";
import { IUserService } from "../interfaces/user-service.interface";

@Injectable()
export class UserService implements IUserService {

  public updateUser(userId: string) {
    console.log(`${UserService.name}: Update user with id: ${userId}`)
  }
  
}
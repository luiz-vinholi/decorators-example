import { Inject } from "@nestjs/common"
import { UserStepService } from "src/user-step/services/user-step.service"

export function UpdateUserStep (): MethodDecorator {
  const injectUserStepService = Inject(UserStepService)

  return (...callbackArgs) => {
    const target = callbackArgs[0]
    const descriptior: PropertyDescriptor = callbackArgs[2]

    injectUserStepService(target, 'userStepService')
    
    const originalMethod = descriptior.value
    
    descriptior.value = function (...args: any[]) {
      const userId = args[0]
      const response = originalMethod.apply(this, args)

      const userStepService: UserStepService = this.userStepService
      userStepService.updateStep(userId)

      return response
    }
  }
}

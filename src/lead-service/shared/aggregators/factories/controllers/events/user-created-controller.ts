import { CreateLeadUsecaseFactory } from '@lead-service/shared/aggregators/factories/application/usecases/create-lead-usecase';
import { Factory } from '@lead-service/shared/protocols/factory';
import { StaticImplements } from '@lead-service/shared/utils/types/static-implements';
import { UserSchema } from '@lead-service/shared/schemas/user';
import { EventController } from '@lead-service/shared/protocols/event';
import { UserCreatedController } from '@lead-service/presentation/controllers/event/user-created-controller';

@StaticImplements<Factory<EventController<UserSchema>>>()
export class UserCreatedControllerFactory {
  static make(): EventController<UserSchema> {
    const createLeadUsecase = CreateLeadUsecaseFactory.make();

    return new UserCreatedController(createLeadUsecase);
  }
}

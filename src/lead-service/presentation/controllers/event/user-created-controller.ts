import { CreateLeadUsecase } from '@lead-service/application/usecases/create-lead-usecase';
import { EventController } from '@lead-service/shared/protocols/event';
import { UserSchema } from '@lead-service/shared/schemas/user';

export class UserCreatedController extends EventController<UserSchema> {
  constructor(private readonly createLeadUsecase: CreateLeadUsecase) {
    super();
  }

  public async listen(eventPaload: UserSchema) {
    this.createLeadUsecase.handle(eventPaload.email, eventPaload.name, eventPaload.phone);
  }
}

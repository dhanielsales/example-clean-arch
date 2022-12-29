import { ListUsersUsecase } from '@user-service/application/usecases/list-users-usecase';
import { HttpController, HttpRequest, HttpResponse } from '@user-service/shared/protocols/http';

export class ListUsersController implements HttpController {
  constructor(private readonly listUsersUsecase: ListUsersUsecase) {}

  public async handle(_request: HttpRequest): Promise<HttpResponse> {
    const users = await this.listUsersUsecase.handle();

    return {
      status: 200,
      payload: users,
    };
  }
}

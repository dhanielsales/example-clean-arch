import { CreateUserUsecase } from '@user-service/application/usecases/create-user-usecase';
import { HttpController, HttpRequest, HttpResponse } from '@user-service/shared/protocols/http';

export class CreateUserController implements HttpController {
  constructor(private readonly createUserUsecase: CreateUserUsecase) {}

  public async handle(request: HttpRequest): Promise<HttpResponse> {
    const { email, password } = request.body;

    const user = await this.createUserUsecase.handle(email, password);

    return {
      status: 201,
      payload: user,
    };
  }
}

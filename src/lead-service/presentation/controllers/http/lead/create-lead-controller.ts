import { CreateLeadUsecase } from '@lead-service/application/usecases/create-lead-usecase';
import { HttpController, HttpRequest, HttpResponse } from '@lead-service/shared/protocols/http';

export class CreateLeadController implements HttpController {
  constructor(private readonly createLeadUsecase: CreateLeadUsecase) {}

  public async handle(request: HttpRequest): Promise<HttpResponse> {
    const { email, name, phone } = request.body;

    const lead = await this.createLeadUsecase.handle(email, name, phone);

    return {
      status: 201,
      payload: lead,
    };
  }
}

import { ListLeadsUsecase } from '@lead-service/application/usecases/list-leads-usecase';
import { HttpController, HttpRequest, HttpResponse } from '@lead-service/shared/protocols/http';

export class ListLeadsController implements HttpController {
  constructor(private readonly listLeadsUsecase: ListLeadsUsecase) {}

  public async handle(_request: HttpRequest): Promise<HttpResponse> {
    const leads = await this.listLeadsUsecase.handle();

    return {
      status: 200,
      payload: leads,
    };
  }
}

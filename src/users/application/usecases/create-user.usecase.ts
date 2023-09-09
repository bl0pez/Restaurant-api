import { Injectable } from '@decorators/di';

@Injectable({
  providedIn: 'root',
})
export class CreateUserUseCase {
  public constructor() {}

  public async run() {
    return 'Hello world';
  }
}

import { Injectable } from '@decorators/di';
import { MoongoUserRepository } from '../../infrastructure/repository/moongo-user.repostory';

@Injectable({
  providedIn: 'root',
})
export class CreateUserUseCase {
  public constructor(private readonly repository: MoongoUserRepository) {}

  public async run() {
    return [];
  }
}

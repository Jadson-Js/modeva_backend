import { UserRepository } from '../../../infra/database/mongoose/repositories/UserRepository';

import { FindAllUseCase } from '../../../application/useCases/user/FindAllUseCase';

const userRepository = new UserRepository();
export const findAllUsersUseCase = new FindAllUseCase(userRepository);

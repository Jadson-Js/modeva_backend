import { UserRepository } from '../../infra/database/mongoose/repositories/UserRepository';

import { FindAllUseCase } from '../../application/useCases/user/FindAllUseCase';
import { FindByEmailUseCase } from '../../application/useCases/user/FindByEmailUseCase';
import { FindByIdUseCase } from '../../application/useCases/user/FindByIdUseCase';
import { CreateUseCase } from '../../application/useCases/user/CreateUseCase';

const userRepository = new UserRepository();

export const findAllUsersUseCase = new FindAllUseCase(userRepository);
export const findByIdUseCase = new FindByIdUseCase(userRepository);
export const findByEmailUseCase = new FindByEmailUseCase(userRepository);
export const createUserUseCase = new CreateUseCase(userRepository);

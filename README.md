Objetivo:

projeto-api/
├── src/
│ ├── domain/
│ │ ├── entities/
│ │ │ ├── User.ts
│ │ │ ├── Token.ts
│ │ │ └── index.ts
│ │ ├── repositories/
│ │ │ ├── IUserRepository.ts
│ │ │ ├── ITokenRepository.ts
│ │ │ └── index.ts
│ │ ├── services/
│ │ │ ├── IEmailService.ts
│ │ │ ├── ICacheService.ts
│ │ │ └── index.ts
│ │ └── errors/
│ │ ├── AppError.ts
│ │ ├── ValidationError.ts
│ │ └── NotFoundError.ts
│ ├── application/
│ │ ├── useCases/
│ │ │ ├── user/
│ │ │ │ ├── CreateUserUseCase.ts
│ │ │ │ ├── GetUserUseCase.ts
│ │ │ │ ├── UpdateUserUseCase.ts
│ │ │ │ └── DeleteUserUseCase.ts
│ │ │ └── auth/
│ │ │ ├── LoginUseCase.ts
│ │ │ ├── RegisterUseCase.ts
│ │ │ └── RefreshTokenUseCase.ts
│ │ ├── dtos/
│ │ │ ├── CreateUserDTO.ts
│ │ │ ├── UpdateUserDTO.ts
│ │ │ ├── LoginDTO.ts
│ │ │ └── ApiResponseDTO.ts
│ │ └── validators/
│ │ ├── UserValidator.ts
│ │ ├── AuthValidator.ts
│ │ └── CommonValidator.ts
│ ├── infrastructure/
│ │ ├── database/
│ │ │ ├── mongoose/
│ │ │ │ ├── connection.ts
│ │ │ │ ├── models/
│ │ │ │ │ ├── UserModel.ts
│ │ │ │ │ └── TokenModel.ts
│ │ │ │ └── repositories/
│ │ │ │ ├── UserRepository.ts
│ │ │ │ └── TokenRepository.ts
│ │ │ └── redis/
│ │ │ ├── connection.ts
│ │ │ └── CacheService.ts
│ │ ├── services/
│ │ │ ├── EmailService.ts
│ │ │ ├── JWTService.ts
│ │ │ ├── HashService.ts
│ │ │ └── StorageService.ts
│ │ └── external/
│ │ ├── sendgrid/
│ │ │ └── SendGridEmailProvider.ts
│ │ └── aws/
│ │ └── S3StorageProvider.ts
│ ├── presentation/
│ │ ├── controllers/
│ │ │ ├── UserController.ts
│ │ │ ├── AuthController.ts
│ │ │ └── HealthController.ts
│ │ ├── middlewares/
│ │ │ ├── auth.middleware.ts
│ │ │ ├── validation.middleware.ts
│ │ │ ├── error.middleware.ts
│ │ │ ├── rateLimit.middleware.ts
│ │ │ └── cors.middleware.ts
│ │ ├── routes/
│ │ │ ├── v1/
│ │ │ │ ├── userRoutes.ts
│ │ │ │ ├── authRoutes.ts
│ │ │ │ ├── healthRoutes.ts
│ │ │ │ └── index.ts
│ │ │ └── index.ts
│ │ └── swagger/
│ │ ├── swagger.config.ts
│ │ └── schemas/
│ │ ├── User.schema.ts
│ │ └── Auth.schema.ts
│ ├── shared/
│ │ ├── config/
│ │ │ ├── env.config.ts
│ │ │ ├── database.config.ts
│ │ │ ├── cache.config.ts
│ │ │ └── app.config.ts
│ │ ├── constants/
│ │ │ ├── httpStatus.ts
│ │ │ ├── errorMessages.ts
│ │ │ └── regex.ts
│ │ ├── utils/
│ │ │ ├── logger.ts
│ │ │ ├── asyncHandler.ts
│ │ │ ├── dateUtils.ts
│ │ │ └── responseUtils.ts
│ │ ├── types/
│ │ │ ├── common.types.ts
│ │ │ ├── auth.types.ts
│ │ │ └── api.types.ts
│ │ └── container/
│ │ └── dependencyInjection.ts
│ ├── app.ts
│ └── server.ts
├── tests/
│ ├── unit/
│ │ ├── useCases/
│ │ │ ├── user/
│ │ │ │ ├── CreateUserUseCase.spec.ts
│ │ │ │ └── GetUserUseCase.spec.ts
│ │ │ └── auth/
│ │ │ └── LoginUseCase.spec.ts
│ │ ├── services/
│ │ │ ├── EmailService.spec.ts
│ │ │ └── JWTService.spec.ts
│ │ └── utils/
│ │ └── dateUtils.spec.ts
│ ├── integration/
│ │ ├── repositories/
│ │ │ └── UserRepository.spec.ts
│ │ └── controllers/
│ │ ├── UserController.spec.ts
│ │ └── AuthController.spec.ts
│ ├── e2e/
│ │ ├── auth.e2e.spec.ts
│ │ ├── user.e2e.spec.ts
│ │ └── health.e2e.spec.ts
│ ├── fixtures/
│ │ ├── userFixtures.ts
│ │ └── authFixtures.ts
│ ├── mocks/
│ │ ├── repositories/
│ │ │ └── UserRepository.mock.ts
│ │ └── services/
│ │ └── EmailService.mock.ts
│ └── setup/
│ ├── setupTests.ts
│ └── testDatabase.ts
├── docs/
│ ├── api/
│ │ ├── swagger.json
│ │ └── postman_collection.json
│ ├── architecture/
│ │ ├── clean-architecture.md
│ │ └── database-design.md
│ └── deployment/
│ ├── docker-setup.md
│ └── environment-variables.md
├── scripts/
│ ├── build.sh
│ ├── deploy.sh
│ ├── seed-database.ts
│ ├── migrate.ts
│ └── health-check.sh
├── docker/
│ ├── Dockerfile
│ ├── Dockerfile.dev
│ ├── docker-compose.yml
│ ├── docker-compose.dev.yml
│ └── nginx.conf
├── .github/
│ └── workflows/
│ ├── ci.yml
│ └── cd.yml
├── environments/
│ ├── .env.example
│ ├── .env.development
│ ├── .env.staging
│ └── .env.production
├── .gitignore
├── .eslintrc.js
├── .prettierrc
├── jest.config.js
├── tsconfig.json
├── tsconfig.build.json
├── package.json
├── package-lock.json
└── README.md

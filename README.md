Objetivo:

projeto-api/
├── src/
│ ├── domain/
│ │ ├── entities/
│ │ │ ├── User.ts
│ │ ├── repositories/
│ │ │ ├── IUserRepository.ts
│ │ ├── services/
│ │ │ ├── IEmailService.ts
│ │ │ ├── ICacheService.ts
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
│ │ ├── utils/
│ │ │ ├── logger.ts
│ │ │ ├── asyncHandler.ts
│ │ │ ├── dateUtils.ts
│ │ │ └── responseUtils.ts
│ │ ├── types/
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
│ └── environment-variables.md
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

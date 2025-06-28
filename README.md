Objetivo:

projeto-api/
├── src/ (COMPLETE)
│ ├── domain/ (COMPLETE)
│ │ ├── entities/ (COMPLETE)
│ │ │ ├── User.ts (COMPLETE)
│ │ ├── repositories/ (COMPLETE)
│ │ │ ├── IUserRepository.ts (COMPLETE)
│ │ ├── services/
│ │ │ ├── IEmailService.ts
│ │ │ ├── ICacheService.ts
│ │ └── errors/ (COMPLETE)
│ │ ├── AppError.ts (COMPLETE)
│ │ ├── ValidationError.ts
│ │ └── NotFoundError.ts (COMPLETE)
│ ├── application/ (COMPLETE)
│ │ ├── useCases/ (COMPLETE)
│ │ │ ├── user/ (COMPLETE)
│ │ │ │ ├── CreateUserUseCase.ts (COMPLETE)
│ │ │ │ ├── GetUserUseCase.ts (COMPLETE)
│ │ │ │ ├── UpdateUserUseCase.ts
│ │ │ │ └── DeleteUserUseCase.ts
│ │ │ └── auth/
│ │ │ ├── LoginUseCase.ts
│ │ │ ├── RegisterUseCase.ts
│ │ ├── dtos/ (COMPLETE)
│ │ │ ├── CreateUserDTO.ts (COMPLETE)
│ │ │ ├── UpdateUserDTO.ts
│ │ │ ├── LoginDTO.ts
│ │ │ └── ApiResponseDTO.ts
│ │ └── validators/
│ │ ├── UserValidator.ts
│ │ ├── AuthValidator.ts
│ │ └── CommonValidator.ts
│ ├── infrastructure/ (COMPLETE)
│ │ ├── database/ (COMPLETE)
│ │ │ ├── mongoose/ (COMPLETE)
│ │ │ │ ├── connection.ts (COMPLETE)
│ │ │ │ ├── models/ (COMPLETE)
│ │ │ │ │ ├── UserModel.ts (COMPLETE)
│ │ │ │ │ └── TokenModel.ts
│ │ │ │ └── repositories/ (COMPLETE)
│ │ │ │ ├── UserRepository.ts (COMPLETE)
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
│ ├── presentation/ (COMPLETE)
│ │ ├── controllers/ (COMPLETE)
│ │ │ ├── UserController.ts (COMPLETE)
│ │ │ ├── AuthController.ts
│ │ ├── middlewares/ (COMPLETE)
│ │ │ ├── auth.middleware.ts (COMPLETE)
│ │ │ ├── validation.middleware.ts
│ │ │ ├── error.middleware.ts (COMPLETE)
│ │ │ ├── rateLimit.middleware.ts  
│ │ │ └── cors.middleware.ts
│ │ ├── routes/ (COMPLETE)
│ │ │ ├── v1/
│ │ │ │ ├── userRoutes.ts (COMPLETE)
│ │ │ │ ├── authRoutes.ts
│ │ │ │ └── index.ts
│ │ │ └── index.ts (COMPLETE)
│ │ └── swagger/
│ │ ├── swagger.config.ts
│ │ └── schemas/
│ │ ├── User.schema.ts
│ │ └── Auth.schema.ts
│ ├── shared/ (COMPLETE)
│ │ ├── config/ (COMPLETE)
│ │ │ ├── env.config.ts
│ │ │ ├── database.config.ts (COMPLETE)
│ │ │ ├── cache.config.ts
│ │ │ └── app.config.ts
│ │ ├── constants/
│ │ │ ├── httpStatus.ts
│ │ │ ├── errorMessages.ts
│ │ ├── utils/ (COMPLETE)
│ │ │ ├── logger.ts
│ │ │ ├── asyncHandler.ts (COMPLETE)
│ │ │ ├── dateUtils.ts
│ │ │ └── responseUtils.ts
│ │ ├── types/
│ │ │ ├── auth.types.ts
│ │ │ └── api.types.ts
│ │ └── container/ (COMPLETE)
│ │ └── dependencyInjection.ts (COMPLETE)
│ ├── app.ts (COMPLETE)
│ └── server.ts (COMPLETE)
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

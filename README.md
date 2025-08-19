Objetivo:

projeto-api/
├── src/ (COMPLETE)
│ ├── domain/ (COMPLETE)
│ │ ├── entities/ (COMPLETE)
│ │ │ ├── User.ts (COMPLETE)
│ │ ├── repositories/ (COMPLETE)
│ │ │ ├── IUserRepository.ts (COMPLETE)
│ │ └── errors/ (COMPLETE)
│ │ ├── AppError.ts (COMPLETE)
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
│ │ │ ├── LoginDTO.ts
│ │ │ └── ApiResponseDTO.ts (COMPLETE)
│ ├── infrastructure/ (COMPLETE)
│ │ ├── database/ (COMPLETE)
│ │ │ ├── mongoose/ (COMPLETE)
│ │ │ │ ├── connection.ts (COMPLETE)
│ │ │ │ ├── models/ (COMPLETE)
│ │ │ │ │ ├── UserModel.ts (COMPLETE)
│ │ │ │ └── repositories/ (COMPLETE)
│ │ │ │ ├── UserRepository.ts (COMPLETE)
│ │ │ ├── connection.ts (COMPLETE)
│ │ ├── services/
│ │ │ ├── JWTService.ts
│ │ │ ├── HashService.ts
│ │ └── external/
│ ├── presentation/ (COMPLETE)
│ │ ├── controllers/ (COMPLETE)
│ │ │ ├── UserController.ts (COMPLETE)
│ │ │ ├── AuthController.ts
│ │ ├── middlewares/ (COMPLETE)
│ │ │ ├── auth.middleware.ts (COMPLETE)
│ │ │ ├── validation.middleware.ts (COMPLETE)
│ │ │ ├── error.middleware.ts (COMPLETE)
│ │ ├── routes/ (COMPLETE)
│ │ │ ├── userRoutes.ts (COMPLETE)
│ │ │ ├── authRoutes.ts
│ │ │ └── index.ts (COMPLETE)
│ ├── shared/ (COMPLETE)
│ │ ├── config/ (COMPLETE)
│ │ ├── utils/ (COMPLETE)
│ │ │ ├── asyncHandler.ts (COMPLETE)
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
├── .gitignore
├── .eslintrc.js
├── .prettierrc
├── jest.config.js
├── tsconfig.json
├── tsconfig.build.json
├── package.json
├── package-lock.json
└── README.md

// src/middleware/validate.ts (Versão Corrigida)
import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';

export const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      // O método .parse irá lançar um erro se a validação falhar
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      // Se a validação for bem-sucedida, chama o próximo middleware ou handler
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        // Se for um erro do Zod, envia uma resposta 400
        // REMOVA o 'return' daqui
        res.status(400).json({
          message: 'Bad Request',
          errors: error.flatten().fieldErrors,
        });
      } else {
        // Para outros tipos de erro, envia uma resposta 500
        // REMOVA o 'return' daqui também
        res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  };

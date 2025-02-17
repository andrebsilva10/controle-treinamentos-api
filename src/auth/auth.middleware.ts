import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Token não fornecido');
    }

    try {
      const [, token] = authHeader.split(' ');
      
      if (!token) {
        throw new UnauthorizedException('Token inválido');
      }

      next();
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
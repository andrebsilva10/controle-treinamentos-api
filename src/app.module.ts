import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersService } from './users/users.service';
import { TrainingsService } from './trainings/trainings.service';
import { UsersController } from './users/users.controller';
import { TrainingsController } from './trainings/trainings.controller';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { TrainingsModule } from './trainings/trainings.module';

@Module({
  imports: [PrismaModule, UsersModule, TrainingsModule],
  controllers: [AppController, UsersController, TrainingsController],
  providers: [AppService, PrismaService, UsersService, TrainingsService],
})
export class AppModule {}

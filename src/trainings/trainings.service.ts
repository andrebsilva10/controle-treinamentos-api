import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTrainingDto } from './dto/create-training.dto';

@Injectable()
export class TrainingsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, createTrainingDto: CreateTrainingDto) {
    return this.prisma.training.create({
      data: {
        ...createTrainingDto,
        userId,
      },
    });
  }

  async findAll(userId: number) {
    return this.prisma.training.findMany({
      where: { userId },
    });
  }

  async findOne(userId: number, id: number) {
    const training = await this.prisma.training.findFirst({
      where: { 
        id,
        userId,
      },
    });

    if (!training) {
      throw new NotFoundException('Treinamento não encontrado');
    }

    return training;
  }

  async update(userId: number, id: number, updateTrainingDto: Partial<CreateTrainingDto>) {
    await this.findOne(userId, id);

    return this.prisma.training.update({
      where: { id },
      data: updateTrainingDto,
    });
  }

  async remove(userId: number, id: number) {
    await this.findOne(userId, id);
    await this.prisma.training.delete({ where: { id } });
  }
}
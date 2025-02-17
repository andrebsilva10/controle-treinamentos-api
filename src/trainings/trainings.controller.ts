import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TrainingsService } from './trainings.service';
import { CreateTrainingDto } from './dto/create-training.dto';

@Controller('users/:userId/trainings')
export class TrainingsController {
  constructor(private readonly trainingsService: TrainingsService) {}

  @Post()
  create(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() createTrainingDto: CreateTrainingDto,
  ) {
    return this.trainingsService.create(userId, createTrainingDto);
  }

  @Get()
  findAll(@Param('userId', ParseIntPipe) userId: number) {
    return this.trainingsService.findAll(userId);
  }

  @Get(':id')
  findOne(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.trainingsService.findOne(userId, id);
  }

  @Patch(':id')
  update(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTrainingDto: Partial<CreateTrainingDto>,
  ) {
    return this.trainingsService.update(userId, id, updateTrainingDto);
  }

  @Delete(':id')
  remove(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.trainingsService.remove(userId, id);
  }
}
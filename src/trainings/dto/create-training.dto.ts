import { IsString, IsDateString, IsOptional } from 'class-validator';

export class CreateTrainingDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsString()
  status: string;
}
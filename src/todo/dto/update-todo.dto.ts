import { IsOptional } from 'class-validator';

export class UpdateTodoDto {
  @IsOptional()
  title?: string;

  @IsOptional()
  is_completed?: boolean;
}

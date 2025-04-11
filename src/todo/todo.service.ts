import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepo: Repository<Todo>,
  ) {}

  create(createDto: CreateTodoDto) {
    const todo = this.todoRepo.create(createDto);
    return this.todoRepo.save(todo);
  }

  findAll() {
    return this.todoRepo.find();
  }

  findOne(id: number) {
    return this.todoRepo.findOneBy({ id });
  }

  async update(id: number, updateDto: UpdateTodoDto) {
    await this.todoRepo.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.todoRepo.delete(id);
    return { deleted: true };
  }
}

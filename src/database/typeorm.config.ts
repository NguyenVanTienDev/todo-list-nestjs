import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todo } from 'src/todo/entities/todo.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'todo_list',
  entities: [Todo],
  synchronize: true,
};

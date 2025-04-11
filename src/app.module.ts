import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './database/typeorm.config';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TodoModule],
})
export class AppModule {}

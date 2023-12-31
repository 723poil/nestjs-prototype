import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { ConfigModule } from '@nestjs/config';
import { MySqlConfigModule } from './config/mysql-config/mysql-config.module';
import { MySqlConfigService } from './config/mysql-config/mysql-config';
import { APP_FILTER, RouterModule, Routes } from '@nestjs/core';
import { HttpExceptionFilter } from './http-exception/http-exception.filter';

const routes: Routes = [
  {
    path: '/agent',
    module: BooksModule
  }
]

@Module({
  imports: [
    RouterModule.register(routes),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [MySqlConfigModule],
      useClass: MySqlConfigService,
      inject: [MySqlConfigService],
    }),
    BooksModule
  ],
  controllers: [AppController],
  providers: [AppService, 
    {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  }],
})
export class AppModule {}

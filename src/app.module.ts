import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'users',
    password: 'users',
    database: 'users',
    entities: [
      __dirname + '/**/*.entity.{js,ts}'
    ],
    schema: 'public',
    synchronize: true,
  }), UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

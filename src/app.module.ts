import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GardensController } from './gardens/gardens.controller';
import { GardensService } from './gardens/gardens.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forRoot(), ConfigModule.forRoot()],
  controllers: [AppController, GardensController],
  providers: [AppService, GardensService],
})
export class AppModule {}

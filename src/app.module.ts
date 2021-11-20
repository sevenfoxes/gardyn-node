import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GardensController } from './gardens/gardens.controller';
import { GardensService } from './gardens/gardens.service';
import { ConfigService } from './config/config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot()],
  controllers: [AppController, GardensController],
  providers: [AppService, GardensService, ConfigService],
})
export class AppModule {}

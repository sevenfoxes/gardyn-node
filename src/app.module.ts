import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GardensController } from './gardens/gardens.controller';
import { GardensService } from './gardens/gardens.service';

@Module({
  imports: [],
  controllers: [AppController, GardensController],
  providers: [AppService, GardensService],
})
export class AppModule {}

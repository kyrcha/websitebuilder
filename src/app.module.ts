import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebsitesController } from './websites/websites.controller';

@Module({
  imports: [],
  controllers: [AppController, WebsitesController],
  providers: [AppService],
})
export class AppModule {}

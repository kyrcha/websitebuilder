import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { WebsitesController } from './websites/websites.controller';
import { WebsitesService } from './websites/websites.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, WebsitesController],
  providers: [AppService, WebsitesService],
})
export class AppModule {}

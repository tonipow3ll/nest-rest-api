import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesController } from './routes/routes.controller';
import { RoutesService } from './routes/routes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RouteModule } from './routes/routes.module';
import config from './config/keys'

@Module({
  imports: [RouteModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, RoutesController],
  providers: [AppService, RoutesService],
})

export class AppModule {}
